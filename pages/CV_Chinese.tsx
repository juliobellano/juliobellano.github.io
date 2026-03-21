import React from 'react';
import { Section, BulletItem, Link } from './CVLayout';

const CVChinese: React.FC = () => {
  return (
    <div className="h-screen bg-[#F9FBFD] flex flex-col overflow-hidden">
      {/* Minimal header bar */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between flex-wrap gap-y-1">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-[13px] text-[#444746] hover:text-[#1a73e8] hover:bg-gray-100 px-2 py-1 rounded transition-colors"
          >
            ← 返回
          </a>
          <span className="text-[14px] text-[#1f1f1f] font-medium">鍾國榮 Julio Bellano — 個人履歷</span>
        </div>
        <a
          href="/cv-english"
          className="text-[13px] text-[#1055CC] hover:underline px-2 py-1"
        >
          English
        </a>
      </div>

      {/* Document area */}
      <div className="flex-1 overflow-y-auto py-8 pb-20">
        <div className="flex justify-center">
        <div className="bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] w-full max-w-[816px] px-5 py-8 sm:px-[72px] sm:py-[72px]">

          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-[20pt] font-bold text-black">鍾國榮 Julio Bellano Laksana</h1>
            <div className="text-xs sm:text-[10pt] text-black mt-1 flex flex-wrap justify-center gap-x-2 gap-y-1">
              <a href="mailto:juliobellanolaksana@gmail.com" className="text-[#1055CC] hover:underline">
                juliobellanolaksana@gmail.com
              </a>
              <span>|</span>
              <Link href="https://www.linkedin.com/in/juliobellano/">LinkedIn</Link>
              <span>|</span>
              <Link href="https://github.com/juliobellano">github.com/juliobellano</Link>
              <span>|</span>
              <span>(+886) 970593892</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-5">
            <p className="text-sm sm:text-[10.5pt] text-black leading-[1.55]">
              全方位且學習能力強的資訊工程畢業生，擁有<strong>從零到一部署產品</strong>及整合大型語言模型解決商業問題的經驗。曾參加
              <strong>2場黑客松</strong>、<strong>1場Kaggle競賽</strong>，並在{' '}
              <Link href="https://www.shl-medical.com/">SHL Medical</Link>{' '}
              開發一套生產就緒工具，<strong>每日處理5億以上數據點</strong>，大幅降低對Excel與Minitab的依賴。
            </p>
          </div>

          {/* Research Experience */}
          <Section title="研究經歷">
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  淡江大學電腦視覺與機器學習實驗室，台灣
                </span>
                <span className="text-xs sm:text-[10pt] text-black">2025年9月</span>
              </div>
              <div className="flex flex-wrap justify-between items-baseline gap-y-1 mb-1">
                <span className="text-xs sm:text-[10pt] italic text-black">大學部研究員</span>
                <Link href="https://www.linkedin.com/posts/juliobellano_our-second-smolvla-model-is-performing-pretty-activity-7399113701926162432-UsDU?utm_source=share&utm_medium=member_desktop&rcm=ACoAADagySwBbxd9S9B1tXYFqsTHtIVucwd6j20">
                  成果展示
                </Link>
              </div>
              <BulletItem>
                <strong>研究</strong>視覺語言動作模型（VLA）的潛力，包含smolVLA、π0.5及動作分塊Transformer，應用於番茄採摘精準農業。
              </BulletItem>
              <BulletItem>
                <strong>貢獻</strong>開源模型smolVLA，即{' '}
                <Link href="https://github.com/huggingface/lerobot">Le-Robot @huggingface</Link>
              </BulletItem>
              <BulletItem>
                在GPU叢集上<strong>訓練</strong>VLA模型，實現優雅的失敗處理、檢查點廣播及串流資料集。
              </BulletItem>
            </div>
          </Section>

          {/* Work Experience */}
          <Section title="工作經歷">
            <div className="mb-3">
              <div className="text-sm sm:text-[10.5pt] font-bold text-black">
                <Link href="https://www.shl-medical.com/">斯堪地那維亞健康有限公司（SHL Medical）</Link>
              </div>
              <div className="text-xs sm:text-[10pt] text-[#444746] mb-0.5">
                全球第一大藥物輸送裝置製造商（自動注射器）
              </div>
              <div className="flex flex-wrap justify-between items-baseline gap-y-1 mb-1">
                <span className="text-xs sm:text-[10pt] italic text-black">軟體開發實習生</span>
                <span className="text-xs sm:text-[10pt] text-black">2025年7月 – 至今</span>
              </div>
              <BulletItem>
                <strong>每位工程師每週節省5小時以上</strong>，透過開發以.NET C#、React及SQL建置的內部互動工具，將Excel與Minitab使用率降低<strong>50%</strong>，每日分析<strong>5億以上數據點</strong>。
              </BulletItem>
              <BulletItem>
                <strong>建立、維護並部署</strong>使用Microsoft Azure的CI/CD流水線，確保持續整合與部署。
              </BulletItem>
              <BulletItem>
                <strong>遷移</strong>舊版SharePoint API整合至Microsoft Graph REST API，供<strong>全球300位以上工程師</strong>（美國、瑞士、台灣辦公室）使用。
              </BulletItem>
            </div>
          </Section>

          {/* Competitions */}
          <Section title="競賽經歷">
            {/* Proactive Live AI Agent */}
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  主動式即時AI代理{' '}
                  <span className="font-normal text-xs sm:text-[10pt]">
                    — <Link href="https://geminiliveagentchallenge.devpost.com/">Google Gemini, Devpost</Link>
                  </span>
                </span>
                <span className="text-xs sm:text-[10pt] text-black">2026年3月</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-[10pt] text-[#444746] mb-1">
                <span>Agents ADK · WebSocket · Google Cloud Platform</span>
                <Link href="https://youtu.be/B17bBNdpYOs">成果展示 ↗</Link>
              </div>
              <BulletItem>
                <strong>獨自設計並交付</strong>一個即時多模態多代理AI烹飪助手，<strong>在48小時內完成</strong>，整合<strong>4個並行LLM模型</strong>（Gemini Live API、Flash、Nano Banana及Pro），實現零感知延遲的無縫對話體驗。
              </BulletItem>
              <BulletItem>
                <strong>設計並實作8工具代理框架</strong>，結合提示與上下文工程，確保長期對話中的可靠性與準確性。
              </BulletItem>
            </div>

            {/* Gemini 3 Hackathon */}
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  Gemini 3 黑客松{' '}
                  <span className="font-normal text-xs sm:text-[10pt]">
                    — <Link href="https://gdg.community.dev/events/details/google-gdg-stanford-presents-stanford-x-deepmind-hackathon-build-with-google-gemini/">史丹佛大學</Link>
                  </span>
                </span>
                <span className="text-xs sm:text-[10pt] text-black">2026年2月</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-[10pt] text-[#444746]">
                <span>智能代碼工具 · Google Cloud Platform</span>
                <Link href="https://youtu.be/zraaiLWaCUM">成果展示 ↗</Link>
              </div>
            </div>

            {/* Kaggle */}
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  <Link href="https://www.kaggle.com/competitions/csiro-biomass/overview">Images2Biomass — Kaggle</Link>
                </span>
                <span className="text-xs sm:text-[10pt] text-black">2025年11月</span>
              </div>
              <div className="text-xs sm:text-[10pt] text-[#444746] mb-1">
                澳洲國家科學機構利用機器學習改善農業之挑戰賽
              </div>
              <BulletItem>
                <strong>微調DinoV3模型</strong>，協助農民從俯視圖像精確估算牧草生物量，取代傳統破壞性取樣方法（割草乾燥稱重）。
              </BulletItem>
              <BulletItem>
                <strong>開發5折模型集成</strong>，結合對數空間回歸、自訂圖塊裁切及生物量約束混合，與3人團隊協作提升預測穩定性。
              </BulletItem>
            </div>
          </Section>

          {/* Projects & Ventures */}
          <Section title="專案與創業">
            {/* Warung Bang Jul */}
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  <Link href="https://warungbangjul.vercel.app/">Warung Bang Jul</Link>（創辦人），台灣
                </span>
                <div className="flex items-center gap-3 text-xs sm:text-[10pt]">
                  <Link href="https://lnkd.in/gyRUMErr">貼文 ↗</Link>
                  <span className="text-black">2025年3月</span>
                </div>
              </div>
              <BulletItem>
                <strong>創辦並經營</strong>線上餐廳；以Python/FastAPI + React建置全端自動化系統，從零數位化訂單處理、庫存管理及商業分析。
              </BulletItem>
              <BulletItem>
                <strong>訓練並部署</strong>自訂YOLOv11n電腦視覺模型以自動化即時庫存追蹤，<strong>模型大小優化41%</strong>以符合部署限制。
              </BulletItem>
              <BulletItem>
                <strong>上線首日即吸引115位用戶</strong>，<strong>正常運行率100%</strong>；使用GitHub Actions與Pytest建立CI/CD，部署於Vercel + Render。
              </BulletItem>
            </div>

            {/* Semantic Search */}
            <div className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">
                  <Link href="https://github.com/juliobellano/semantic_search/tree/main">語意搜尋系統</Link>
                </span>
                <span className="text-xs sm:text-[10pt] text-black">2025年11月</span>
              </div>
              <div className="text-xs sm:text-[10pt] text-[#444746] mb-1">
                EmbeddingGemma · Docling · 向量資料庫 · Python
              </div>
              <BulletItem>
                <strong>建立</strong>本地語意資訊檢索系統，設計用於搜尋<strong>數十萬份</strong>多語言內部部門文件，且不需將資料上傳至雲端。
              </BulletItem>
              <BulletItem>
                使用EmbeddingGemma支援<strong>100種以上語言</strong>及<strong>10種以上文件格式</strong>（PDF、DOCX、PPTX、XLSX、HTML、音訊等）。
              </BulletItem>
            </div>
          </Section>

          {/* Leadership */}
          <Section title="領導經歷">
            <div className="mb-2">
              <div className="flex flex-wrap justify-between items-baseline gap-y-1">
                <span className="text-sm sm:text-[10.5pt] font-bold text-black">多媒體部門主任</span>
                <span className="text-xs sm:text-[10pt] text-black">2024年5月</span>
              </div>
              <div className="text-xs sm:text-[10pt] italic text-black mb-1">
                淡江大學印尼同學聯誼會
              </div>
              <BulletItem>
                <strong>帶領5人團隊</strong>與2家在地廠商合辦活動，吸引<strong>150位參與者</strong>，滿意度達<strong>5.7/6.0</strong>，較前一年<strong>提升6%</strong>。
              </BulletItem>
            </div>
          </Section>

          {/* Skills */}
          <Section title="技能">
            <p className="text-sm sm:text-[10.5pt] text-black leading-[1.55]">
              <span className="font-semibold">雲端與DevOps：</span>Google Cloud Platform、Microsoft Azure、Vercel、Render、CI/CD、Docker
              <br />
              <span className="font-semibold">程式語言：</span>TypeScript、Python、C#、SQL
              <br />
              <span className="font-semibold">AI/機器學習：</span>大型語言模型整合、YOLO、視覺語言動作模型
              <br />
              <span className="font-semibold">資料庫：</span>SQL、NoSQL
            </p>
          </Section>

        </div>
        </div>
      </div>
    </div>
  );
};

export default CVChinese;
