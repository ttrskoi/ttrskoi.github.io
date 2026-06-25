import { useEffect, useMemo, useState } from "react";

const projects = [
  {
    shortTitle: "南师大麦考瑞",
    major: "计算机科学与技术",
    meta: ["南京师范大学", "Macquarie University", "4+0 双学位"],
    grade: "SSS- / S+",
    verdict: "最均衡，项目价值最高",
    reach: "高冲",
    positioning: "211 平台＋计算机＋优质外方＋稳定 4+0",
    metrics: [
      ["中方学校层级", "S", "南师大为“双一流”高校，江苏省内认可度高，平台优势明显。"],
      ["中方专业实力", "A+", "并非传统王牌，但在 211 平台内属于实用且有价值的信息类方向。"],
      ["外方综合排名", "S", "麦考瑞大学 QS 2027 世界第 126，外方综合层级较强。"],
      ["外方专业匹配", "S", "信息、数据、商科与金融科技基础齐全，和计算机衔接自然。"],
      ["项目匹配度", "SSS-", "4+0 双学位，不强制出国，培养路径稳定且组合均衡。", true],
      ["就业泛化度", "SSS", "可走开发、数据、AI、金融科技、政企数字化与教育科技。", true],
      ["深造 / 出国价值", "S", "申请计算机、数据科学、信息系统等硕士方向较顺畅。"],
      ["风险控制", "A", "赛道竞争激烈，需要通过编程、项目与实习主动拉开差距。"],
    ],
    references: [
      { year: "2024", score: "593", rank: "36502", equivalent: "约 599", note: "化学类中外合作组" },
      { year: "2025", score: "604", rank: "31362", equivalent: "约 605", note: "高位组保守参考" },
    ],
    gap: "约差 18–24 分",
    assessment: "项目本身最值得优先，但当前位次约落后 1.8 万—2.3 万位。",
    caution: "专业—组号需以 2026 招生计划核对；本页按计算机高位组保守估计。",
  },
  {
    shortTitle: "南信大雷丁",
    major: "数据科学与大数据技术",
    meta: ["南京信息工程大学", "University of Reading", "4 年制 / 可转入"],
    grade: "S",
    verdict: "就业转向最灵活",
    reach: "冲刺",
    positioning: "数据主赛道＋气象地学特色＋海外衔接",
    metrics: [
      ["中方学校层级", "A+", "南信大为“双一流”高校，非 211，但学校特色非常鲜明。"],
      ["中方专业实力", "A", "计算机与地学数据基础不错，适合做数据科学交叉应用。"],
      ["外方综合排名", "S", "雷丁大学 QS 2027 世界并列第 196，外方层级不错。"],
      ["外方专业匹配", "A+", "气象、气候、环境与数据应用交叉方向具有结合空间。"],
      ["项目匹配度", "A+", "课程对接雷丁相同专业计划，满足条件后可转入外方。"],
      ["就业泛化度", "SSS", "数据分析、算法、开发、AI、金融科技、GIS 均可延伸。", true],
      ["深造 / 出国价值", "A+", "适合数据科学、AI、统计、商业分析和地理空间数据硕士。"],
      ["风险控制", "A", "非 211 是扣分点，且需要较强数学、编程与项目能力。"],
    ],
    references: [
      { year: "2024", score: "578–589", rank: "50217–39949", equivalent: "约 585–595", note: "雷丁学院组区间" },
      { year: "2025", score: "588", rank: "45634", equivalent: "约 589", note: "分专业最低分" },
    ],
    gap: "约差 8 分",
    assessment: "七项中相对更接近的热门项目，适合作为主要冲刺目标。",
    caution: "不能把学院最低组线直接当作数据科学专业线；优先参考分专业数据。",
  },
  {
    shortTitle: "南农密西根",
    major: "食品科学与工程",
    meta: ["南京农业大学", "Michigan State University", "2.5+1.5 / 支持 4+0"],
    grade: "S",
    verdict: "专业匹配度最高",
    reach: "冲刺偏难",
    positioning: "211 平台＋强食品学科＋强农食外方",
    metrics: [
      ["中方学校层级", "S", "南农为教育部直属 211、“双一流”高校，平台扎实。"],
      ["中方专业实力", "SSS", "食品科学与工程获评 A 类，是学校的强势专业方向。", true],
      ["外方综合排名", "S", "密西根州立大学 QS 2027 世界第 182，综合排名不错。"],
      ["外方专业匹配", "SSS", "MSU 农业、食品、生命科学背景强，与南农高度匹配。", true],
      ["项目匹配度", "SSS", "不是硬凑组合，培养路径与两校的专业优势一致。", true],
      ["就业泛化度", "A", "就业稳定，但薪资弹性和行业上限通常不如计算机与数据。"],
      ["深造 / 出国价值", "S", "食品、营养、食品安全、生物工程、公共健康均适合深造。"],
      ["风险控制", "B+", "本科直接就业起薪一般，英语、GPA 和出国路径需提前规划。"],
    ],
    references: [
      { year: "2024", score: "—", rank: "—", equivalent: "—", note: "文件未单列该组" },
      { year: "2025", score: "594", rank: "40639", equivalent: "约 594", note: "06 中外合作组" },
    ],
    gap: "约差 13 分",
    assessment: "专业质量很强，但当前位次与 2025 参考线约差 1.35 万位。",
    caution: "如果招生人数扩张或学费带来降温可尝试冲，不可作为稳妥选择。",
  },
  {
    shortTitle: "南信大雷丁",
    major: "大气科学",
    meta: ["南京信息工程大学", "University of Reading", "强学科 / 深造型"],
    grade: "A+ / S-",
    verdict: "强学科，窄方向",
    reach: "冲刺偏难",
    positioning: "全球强势大气学科＋高度匹配的雷丁方向",
    metrics: [
      ["中方学校层级", "A+", "南信大为“双一流”高校，前身为南京气象学院。"],
      ["中方专业实力", "SSS", "大气科学是最核心王牌，学科实力远强于学校综合标签。", true],
      ["外方综合排名", "S", "雷丁大学 QS 2027 世界并列第 196。"],
      ["外方专业匹配", "SSS", "雷丁在气象、气候、环境方向很强，两校高度匹配。", true],
      ["项目匹配度", "SSS", "课程对接紧密，可延伸至气候与地球系统科学。", true],
      ["就业泛化度", "B+", "专业强，但就业主要集中在气象、气候、科研与环境数据。"],
      ["深造 / 出国价值", "S", "适合气候变化、灾害风险、数值模拟和气象数据建模。"],
      ["风险控制", "A-", "风险不是学科弱，而是考生是否接受相对较窄的职业方向。"],
    ],
    references: [
      { year: "2024", score: "578–589", rank: "50217–39949", equivalent: "约 585–595", note: "雷丁学院组区间" },
      { year: "2025", score: "592", rank: "41600", equivalent: "约 593", note: "分专业最低分" },
    ],
    gap: "约差 12 分",
    assessment: "专业吸引力强，2025 分专业位次比考生领先约 1.25 万位。",
    caution: "学院最低组线不能替代大气科学专业线；适合真正愿意深造的考生。",
  },
  {
    shortTitle: "南师大中澳",
    major: "计算机科学与技术",
    meta: ["南京师范大学", "University of Queensland", "学分互认 / 2+2"],
    grade: "A+",
    verdict: "高上限，高风险",
    reach: "高冲",
    positioning: "南师大＋计算机＋高层级外方",
    metrics: [
      ["中方学校层级", "S", "南师大为“双一流”高校，国内平台与省内认可度强。"],
      ["中方专业实力", "A+", "计算机并非传统王牌，但在 211 平台内实用价值高。"],
      ["外方综合排名", "SSS", "昆士兰大学 QS 2027 世界并列第 40，为本组外方最高。", true],
      ["外方专业匹配", "S", "对接计算机方向，海外学习与继续深造价值较强。"],
      ["项目匹配度", "A", "2+2 学分互认，上限高，但不是稳妥的本土 4+0。"],
      ["就业泛化度", "SSS", "开发、数据、AI、系统和金融科技方向均可覆盖。", true],
      ["深造 / 出国价值", "SSS", "顺利完成海外阶段后，对海外硕士申请帮助明显。", true],
      ["风险控制", "C+", "英语、GPA、家庭预算和真实出国意愿缺一不可。"],
    ],
    references: [
      { year: "2024", score: "600", rank: "30768", equivalent: "约 605", note: "25 学分互认组" },
      { year: "2025", score: "601", rank: "33985", equivalent: "约 602", note: "34 高位组参考" },
    ],
    gap: "约差 21–24 分",
    assessment: "录取位次、家庭预算和出国执行三方面都存在较高门槛。",
    caution: "只有明确愿意出国、英语与预算都能跟上时，才值得靠前放。",
  },
  {
    shortTitle: "河海里尔",
    major: "机械工程",
    meta: ["河海大学", "Université de Lille", "中法工程师路径"],
    grade: "A",
    verdict: "211 平台型选择",
    reach: "冲刺偏难",
    positioning: "河海平台＋机械＋智能制造升级路线",
    metrics: [
      ["中方学校层级", "S", "河海为教育部直属 211、“双一流”高校，平台强。"],
      ["中方专业实力", "A-", "机械不是河海核心王牌，学校强项仍在水利、环境与土木。"],
      ["外方综合排名", "B-", "里尔大学综合排名弱于本组其他主要外方高校。"],
      ["外方专业匹配", "A-", "项目专业对口，强调工程师教育与工程实践。"],
      ["项目匹配度", "A", "有本科、硕士及法国工程师体系衔接思路。"],
      ["就业泛化度", "A", "可延伸至智能制造、汽车、机器人、机电和新能源装备。"],
      ["深造 / 出国价值", "A-", "适合机械、控制、机器人和工程师体系继续深造。"],
      ["风险控制", "B+", "需主动叠加自动化、编程、控制与仿真，避免停留在传统机械。"],
    ],
    references: [
      { year: "2024", score: "589", rank: "39949", equivalent: "约 595", note: "08 中外合作组" },
      { year: "2025", score: "594", rank: "40639", equivalent: "约 594", note: "08 中外合作组" },
    ],
    gap: "约差 13–14 分",
    assessment: "近两年位次稳定在约 4 万位，考生当前约落后 1.4 万位。",
    caution: "除非招生计划扩张或热度下降，否则录取概率不宜高估。",
  },
  {
    shortTitle: "南师大麦考瑞",
    major: "金融数学",
    meta: ["南京师范大学", "Macquarie University", "4+0 双学位"],
    grade: "A",
    verdict: "数学强者的交叉路线",
    reach: "冲刺",
    positioning: "数学＋统计＋金融＋数据科学",
    metrics: [
      ["中方学校层级", "S", "南师大为“双一流”高校，学校平台与省内认可度强。"],
      ["中方专业实力", "A+", "依赖数学、统计、金融与编程交叉能力，专业上限不低。"],
      ["外方综合排名", "S", "麦考瑞大学 QS 2027 世界第 126，综合层级不错。"],
      ["外方专业匹配", "S", "麦考瑞商科、金融、数据与统计方向和金融数学匹配。"],
      ["项目匹配度", "S", "4+0 双学位路径稳定，适合本土完成本科后继续深造。"],
      ["就业泛化度", "A", "可走金融科技、数据分析、风控、精算与商业分析。"],
      ["深造 / 出国价值", "S-", "适合金融工程、统计、精算、商业分析与数据科学硕士。"],
      ["风险控制", "B+", "数学与编程要求高，数学基础一般时学习压力会很明显。"],
    ],
    references: [
      { year: "2024", score: "593", rank: "36502", equivalent: "约 599", note: "化学类中外合作组" },
      { year: "2025", score: "590", rank: "44618", equivalent: "约 590", note: "低位组参考" },
    ],
    gap: "约差 9–18 分",
    assessment: "按 2025 低位组口径，是南师大项目中相对更接近的一项。",
    caution: "专业—组号仍需以 2026 招生计划核对；数学 96 分也需评估学习适配度。",
  },
];

function MetricCard({ metric }) {
  const [label, grade, reason, featured] = metric;
  return (
    <article className={`metric-card ${featured ? "metric-card--featured" : ""}`}>
      <div className="metric-card__topline">
        <span className="metric-card__label">{label}</span>
        <span className="metric-card__grade">{grade}</span>
      </div>
      <p>{reason}</p>
    </article>
  );
}

function ScoreReference({ reference }) {
  return (
    <div className="score-reference">
      <div className="score-reference__year">{reference.year}</div>
      <div>
        <strong>{reference.score}<small> 分</small></strong>
        <p>{reference.rank} 位 · 2026 折算 {reference.equivalent}</p>
        <span>{reference.note}</span>
      </div>
    </div>
  );
}

export function App() {
  const [index, setIndex] = useState(() => {
    const hash = Number(window.location.hash.replace("#", ""));
    return Number.isInteger(hash) && hash >= 1 && hash <= projects.length ? hash - 1 : 0;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const project = projects[index];

  const move = useMemo(
    () => ({
      previous: () => setIndex((value) => Math.max(0, value - 1)),
      next: () => setIndex((value) => Math.min(projects.length - 1, value + 1)),
      first: () => setIndex(0),
      last: () => setIndex(projects.length - 1),
    }),
    [],
  );

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft" || event.key === "PageUp") move.previous();
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") move.next();
      if (event.key === "Home") move.first();
      if (event.key === "End") move.last();
      if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      if (event.key === "Escape") setShowHelp(false);
      if (event.key === "?") setShowHelp((value) => !value);
    };

    document.addEventListener("fullscreenchange", onFullscreen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [move]);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) await document.exitFullscreen?.();
    else await document.documentElement.requestFullscreen?.();
  };

  return (
    <main className="deck-shell">
      <section className="slide" aria-label={`${project.shortTitle} ${project.major}`}>
        <header className="slide-header">
          <div>
            <p className="eyebrow">
              {String(index + 1).padStart(2, "0")} · 中外合作项目评估
            </p>
            <h1>{project.shortTitle}</h1>
            <p className="major">{project.major}</p>
          </div>
          <div className="program-meta" aria-label="项目基本信息">
            {project.meta.map((item) => <span key={item}>{item}</span>)}
          </div>
        </header>

        <div className="slide-content">
          <section className="metrics-grid" aria-label="八项评级">
            {project.metrics.map((metric) => <MetricCard key={metric[0]} metric={metric} />)}
          </section>

          <aside className="verdict-panel">
            <div className="verdict-panel__intro">
              <div className="verdict-panel__label-row">
                <span>综合判断</span>
                <em className={`reach-badge reach-badge--${project.reach.includes("高冲") ? "hard" : "reach"}`}>
                  {project.reach}
                </em>
              </div>
              <strong>{project.grade}</strong>
              <h2>{project.verdict}</h2>
            </div>

            <blockquote>{project.positioning}</blockquote>

            <div className="candidate-strip">
              <span>考生基准</span>
              <strong>581 分</strong>
              <small>2026 物理类约 54115 位</small>
            </div>

            <div className="score-reference-list">
              {project.references.map((reference) => (
                <ScoreReference key={reference.year} reference={reference} />
              ))}
            </div>

            <div className="gap-callout">
              <span>与历史同位次线</span>
              <strong>{project.gap}</strong>
            </div>

            <div className="verdict-notes">
              <div><span>可达性判断</span><p>{project.assessment}</p></div>
              <div><span>需要留意</span><p>{project.caution}</p></div>
            </div>
          </aside>
        </div>

        <footer className="slide-footer">
          <div className="recommendation">
            <span>报考定位</span>
            <strong>{project.reach}</strong>
          </div>
          <div className="slide-controls" aria-label="幻灯片控制">
            <button type="button" onClick={move.previous} disabled={index === 0}>上一页</button>
            <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
            <button type="button" onClick={move.next} disabled={index === projects.length - 1}>下一页</button>
            <button type="button" onClick={toggleFullscreen}>{isFullscreen ? "退出全屏" : "全屏"}</button>
            <button type="button" onClick={() => setShowHelp(true)}>快捷键</button>
          </div>
        </footer>
      </section>

      {showHelp && (
        <div className="help-backdrop" role="presentation" onClick={() => setShowHelp(false)}>
          <section className="help-dialog" role="dialog" aria-modal="true" aria-label="快捷键说明" onClick={(event) => event.stopPropagation()}>
            <p>演示快捷键</p>
            <dl>
              <div><dt>← / →</dt><dd>切换项目</dd></div>
              <div><dt>Home / End</dt><dd>第一页 / 最后一页</dd></div>
              <div><dt>F</dt><dd>进入全屏</dd></div>
              <div><dt>?</dt><dd>显示快捷键</dd></div>
            </dl>
            <p className="data-note">
              位次口径按 2026 逐分段表：581 分对应约 54115 位。考生信息中记录的 53035 位更接近 582 分，因此页面采用更保守口径。
            </p>
            <button type="button" onClick={() => setShowHelp(false)}>知道了</button>
          </section>
        </div>
      )}
    </main>
  );
}
