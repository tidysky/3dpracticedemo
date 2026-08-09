import React, { useRef, useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TOTAL_FRAMES, makeFrameSrc } from "../framePreloader";

gsap.registerPlugin(useGSAP);

function ScrollHint({ hidden }) {
  const hintRef = useRef(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        allowMotion: "(prefers-reduced-motion: no-preference)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        gsap.to(hintRef.current, {
          autoAlpha: hidden ? 0 : 1,
          duration: conditions.reduceMotion ? 0 : 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });

        if (!hidden && !conditions.reduceMotion) {
          gsap.fromTo(
            ".scroll-hint-arrow",
            { y: -2, autoAlpha: 0.45 },
            {
              y: 7,
              autoAlpha: 1,
              duration: 0.9,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            },
          );
        }
      },
    );

    return () => media.revert();
  }, { dependencies: [hidden], scope: hintRef, revertOnUpdate: true });

  return (
    <div
      ref={hintRef}
      style={{
        position: "fixed",
        left: "50%",
        bottom: "5vh",
        transform: "translateX(-50%)",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        color: "rgba(255,255,255,0.92)",
        fontFamily: "system-ui, sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textShadow: "0 1px 8px rgba(0,0,0,0.55)",
        pointerEvents: "none",
      }}
    >
      <span>Scroll to explore</span>
      <svg
        className="scroll-hint-arrow"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 9.5 12 16.5 19 9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** 用 RAF 从 DOM 计算这段 section 的滚动进度（0~1） */
function useSectionProgress(sectionRef) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf;
    const tick = () => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const total = rect.height - vh; // 250vh - 1vh 的可滚距离
        const np = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total));
        setP(np);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return p;
}

export default function VideoScrollScene() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isFinalScreenVisible, setIsFinalScreenVisible] = useState(false);

  // 这段 250vh 的滚动进度（与任何滚动实现兼容）
  const progress = useSectionProgress(sectionRef);

  // detect simple mobile user agents to provide a fixed fallback for sticky
  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setIsMobile(/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent));
    }
  }, []);

  useEffect(() => {
    const finalScreen = document.querySelector('[data-final-screen]');
    if (!finalScreen || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFinalScreenVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(finalScreen);
    return () => observer.disconnect();
  }, []);

  // 把 0~1 的 progress 映射到 1..TOTAL_FRAMES（向最近帧取整，前进/后退都顺）
  const frameIndex = useMemo(() => {
    const p = Math.min(1, Math.max(0, progress || 0));
    return Math.min(TOTAL_FRAMES, Math.max(1, Math.round(p * (TOTAL_FRAMES - 1)) + 1));
  }, [progress]);

  const src = makeFrameSrc(frameIndex);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", height: "150vh", width: "100%" }}
    >
      {/* sticky 一屏：滚动时固定在视窗，按 progress 切帧 */}
      <div
        style={{
          // Some smooth-scroll implementations use transforms on ancestor elements,
          // which breaks `position: sticky` on mobile browsers. Use `fixed` as a
          // safe fallback for small devices.
          position: isMobile ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        {/* 你的标题层，保持不变 */}
        <div
          className="text-white w-full max-w-4xl h-auto absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 z-20 px-4 text-center text-4xl md:text-8xl lg:text-9xl"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="w-full mx-auto text-center">Welcome</h1>
        </div>

        {/* 序列帧：原生 <img>，不进 Canvas，确保流畅 */}
        <img
          src={src}
          alt={`frame_${frameIndex}`}
          style={{ width: "100vw", height: "100vh", objectFit: "cover", display: "block" }}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          // fallback to .jpg for mobile Safari that lacks WebP support
          onError={(e) => {
            const el = e.currentTarget;
            if (el && el.src && el.src.endsWith('.webp')) {
              el.src = el.src.replace('.webp', '.jpg');
            }
          }}
        />

        <ScrollHint hidden={isFinalScreenVisible} />
      </div>
    </section>
  );
}
