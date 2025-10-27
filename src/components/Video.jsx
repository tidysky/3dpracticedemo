import React, { useRef, useEffect, useState, useMemo } from "react";

/** === 配置 === */
const TOTAL_FRAMES = 100;            // ← 帧总数
const BASE_PATH = "/videoimages";    // ← public 下的目录，如 public/videoimages
const SHOW_HUD = true;               // ← 调试开关：左上角显示 progress & frame

// 根据帧号（1-based）生成文件路径：images1.jpg … images215.jpg
const makeSrc = (i) => `${BASE_PATH}/images${i}.webp`;

/** 轻量预热前几帧，减少首屏白屏 */
function useWarmup(warmCount = 8) {
  useEffect(() => {
    for (let i = 1; i <= Math.min(warmCount, TOTAL_FRAMES); i++) {
      const img = new Image();
      img.src = makeSrc(i);
    }
  }, [warmCount]);
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

  // 这段 250vh 的滚动进度（与任何滚动实现兼容）
  const progress = useSectionProgress(sectionRef);

  useWarmup();

  // 把 0~1 的 progress 映射到 1..TOTAL_FRAMES（向最近帧取整，前进/后退都顺）
  const frameIndex = useMemo(() => {
    const p = Math.min(1, Math.max(0, progress || 0));
    return Math.min(TOTAL_FRAMES, Math.max(1, Math.round(p * (TOTAL_FRAMES - 1)) + 1));
  }, [progress]);

  const src = makeSrc(frameIndex);

  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", height: "150vh", width: "100%" }}
    >
      {/* sticky 一屏：滚动时固定在视窗，按 progress 切帧 */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 你的标题层，保持不变 */}
        <div
          className="text-white w-[50vw] h-auto absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 z-20 text-8xl text-center"
          style={{ pointerEvents: "none" }}
        >
          <h1>Welcome</h1>
        </div>

        {/* 序列帧：原生 <img>，不进 Canvas，确保流畅 */}
        <img
          src={src}
          alt={`frame_${frameIndex}`}
          style={{ width: "100vw", height: "100vh", objectFit: "cover", display: "block" }}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />

        {/* 调试 HUD（确认滚动绑定 OK，确认后可将 SHOW_HUD 设为 false） */}
        {false && (
          <div
            style={{
              position: "absolute",
              left: 12,
              top: 12,
              padding: "6px 10px",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderRadius: 6,
              fontFamily: "system-ui, sans-serif",
              fontSize: 12,
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 6 }}>frame {frameIndex}</div>
            <div>scroll: {progress.toFixed(3)} | total: {TOTAL_FRAMES}</div>
            <div style={{ maxWidth: 360, wordBreak: "break-all", opacity: 0.8 }}>{src}</div>
          </div>
        )}
      </div>
    </section>
  );
}
