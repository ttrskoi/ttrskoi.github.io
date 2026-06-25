import { useEffect, useState } from "react";

const metrics = [
  {
    label: "中方学校层级",
    grade: "S",
    reason: "南师大为“双一流”高校，江苏省内认可度高，平台优势明显。",
  },
  {
    label: "中方专业实力",
    grade: "A+",
    reason: "计算机并非传统王牌，但在 211 平台内属于实用且有价值的工科方向。",
  },
  {
    label: "外方综合排名",
    grade: "S",
    reason: "麦考瑞大学 QS 2027 世界第 126，外方综合层级在本组项目中较强。",
  },
  {
    label: "外方专业匹配",
    grade: "S",
    reason: "信息、数据、商科与金融科技基础齐全，和计算机方向衔接自然。",
  },
  {
    label: "项目匹配度",
    grade: "SSS-",
    reason: "采用 4+0 双学位培养，不强制出国，路径稳定且组合均衡。",
    featured: true,
  },
  {
    label: "就业泛化度",
    grade: "SSS",
    reason: "可走开发、数据、AI、金融科技、政企数字化与教育科技等方向。",
    featured: true,
  },
  {
    label: "深造 / 出国价值",
    grade: "S",
    reason: "海外计算机、数据科学、信息系统等硕士方向均较顺畅。",
  },
  {
    label: "风险控制",
    grade: "A",
    reason: "赛道竞争激烈，需要通过编程、项目与实习主动拉开差距。",
  },
];

function MetricCard({ metric, index }) {
  return (
    <article
      className={`metric-card ${metric.featured ? "metric-card--featured" : ""}`}
      style={{ "--delay": `${120 + index * 45}ms` }}
    >
      <div className="metric-card__topline">
        <span className="metric-card__label">{metric.label}</span>
        <span className="metric-card__grade">{metric.grade}</span>
      </div>
      <p>{metric.reason}</p>
    </article>
  );
}

export function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onKeyDown = (event) => {
      if (event.key.toLowerCase() === "f") {
        document.documentElement.requestFullscreen?.();
      }
      if (event.key === "Escape") setShowHelp(false);
      if (event.key === "?") setShowHelp((value) => !value);
    };

    document.addEventListener("fullscreenchange", onFullscreen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    } else {
      await document.documentElement.requestFullscreen?.();
    }
  };

  return (
    <main className="deck-shell">
      <section className="slide" aria-label="项目评估样板">
        <header className="slide-header">
          <div>
            <p className="eyebrow">01 · 中外合作项目评估</p>
            <h1>南师大麦考瑞</h1>
            <p className="major">计算机科学与技术</p>
          </div>
          <div className="program-meta" aria-label="项目基本信息">
            <span>南京师范大学</span>
            <span>Macquarie University</span>
            <span>4+0 双学位</span>
          </div>
        </header>

        <div className="slide-content">
          <section className="metrics-grid" aria-label="八项评级">
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </section>

          <aside className="verdict-panel">
            <div className="verdict-panel__intro">
              <span>综合判断</span>
              <strong>SSS- <small>/ S+</small></strong>
              <h2>最均衡，优先级最高</h2>
            </div>

            <blockquote>
              南师大平台＋计算机专业＋麦考瑞外方＋4+0 双学位
            </blockquote>

            <div className="verdict-notes">
              <div>
                <span>为什么推荐</span>
                <p>学校平台、专业热度、外方层级和培养路径没有明显短板。</p>
              </div>
              <div>
                <span>适合谁</span>
                <p>希望兼顾 211 平台、热门专业、双学位与风险可控的考生。</p>
              </div>
              <div>
                <span>需要留意</span>
                <p>计算机赛道很卷，课程之外仍要持续积累项目与实习。</p>
              </div>
            </div>
          </aside>
        </div>

        <footer className="slide-footer">
          <div className="recommendation">
            <span>推荐判断</span>
            <strong>能冲就很值得冲</strong>
          </div>
          <div className="slide-controls" aria-label="幻灯片控制">
            <button type="button" disabled>上一页</button>
            <span>01 / 01</span>
            <button type="button" disabled>下一页</button>
            <button type="button" onClick={toggleFullscreen}>
              {isFullscreen ? "退出全屏" : "全屏"}
            </button>
            <button type="button" onClick={() => setShowHelp(true)}>快捷键</button>
          </div>
        </footer>
      </section>

      {showHelp && (
        <div className="help-backdrop" role="presentation" onClick={() => setShowHelp(false)}>
          <section
            className="help-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="快捷键说明"
            onClick={(event) => event.stopPropagation()}
          >
            <p>演示快捷键</p>
            <dl>
              <div><dt>F</dt><dd>进入全屏</dd></div>
              <div><dt>Esc</dt><dd>退出弹窗或全屏</dd></div>
              <div><dt>?</dt><dd>显示快捷键</dd></div>
            </dl>
            <button type="button" onClick={() => setShowHelp(false)}>知道了</button>
          </section>
        </div>
      )}
    </main>
  );
}
