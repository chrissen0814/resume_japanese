import BasicInfomation from "../components/BasicInfomation";
import BusinessInfo from "../components/BusinessInfo";
import HobbyInfo from "../components/HobbyInfo";
import LanguageInfo from "../components/LanguageInfo";
import SkillInfo from "../components/SkillInfo";
import LikeButton from "../components/LikeButton";
import imgMail from "../assets/email.png";
import imgRead from "../assets/reading-book.png";
import imgTalk from "../assets/talking.png";
import imgWrite from "../assets/letter.png";
import imgDoc from "../assets/doc.png";
import imgListen from "../assets/ear.png";
import imgAndroid from "../assets/android.png";
import imgJava from "../assets/java.png";
import imgKotlin from "../assets/kotlin.svg";
import imgFlutter from "../assets/Flutter.svg";
import imgCsharp from "../assets/csharp.svg";
import imgJS from "../assets/JavaScript.svg";
import imgTS from "../assets/typescript.svg";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fragments-69f1d.appspot.com/o/images%2Fc50b292208390a0deb776848c9192fbf.jpg?alt=media&token=baadedb6-ad97-427d-94ae-d4ddb2ad9a0b"
            alt="Avatar"
            className="rounded-full w-24 h-24 sm:w-24 sm:h-24 mx-auto border-4 border-gray-300 object-cover object-[center_30%]"
          />
          <h1 className="text-3xl font-bold">孫其瑞</h1>
          <p className="text-gray-500">
            Software Engineer,
            <br />
            Osaka, Japan
          </p>
        </div>
        <div className="w-full flex-col justify-start items-start space-y-6 mt-6">
          <h2 className="w-full text-center text-2xl font-bold">基本情報</h2>
          <BasicInfomation name="名前" info="孫其瑞" />
          <BasicInfomation name="性別" info="男" />
          <BasicInfomation name="年齢" info="29歳" />
          <BasicInfomation name="国籍" info="中国" />
          <BasicInfomation name="来日期間" info="一年" />
          <BasicInfomation name="住所" info="朝潮橋（中央線）" />
        </div>

        <h2 className="w-full text-center text-2xl font-bold mt-14">
          言語能力
        </h2>
        <div className="w-full flex flex-row justify-center mt-12 gap-6 sm:gap-16 md:gap-16 lg:gap-24">
          <div className="flex flex-col bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-center text-2xl font-bold mb-4">日本語</h2>
            <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-16 mt-6 mb-6">
              <LanguageInfo image={imgWrite} name="書く" />
              <LanguageInfo image={imgRead} name="読む" />
              <LanguageInfo image={imgTalk} name="話す" />
              <LanguageInfo image={imgMail} name="メール" />
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-center text-2xl font-bold mb-4">英語</h2>
            <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-16 mt-6 mb-6">
              <LanguageInfo image={imgWrite} name="書く" />
              <LanguageInfo image={imgDoc} name="ドキュメント" />
              <LanguageInfo image={imgRead} name="読む" />
              <LanguageInfo image={imgListen} name="聴く" />
            </div>
          </div>
        </div>

        <h2 className="w-full text-center text-2xl font-bold mt-14">スキル</h2>
        <div className="flex flex-wrap justify-center gap-20 shadow-lg rounded-2xl bg-white p-6 mt-12">
          <SkillInfo image={imgAndroid} name="Android(6年)" />
          <SkillInfo image={imgJava} name="Java(3年)" />
          <SkillInfo image={imgKotlin} name="Kotlin(3年)" />
          <SkillInfo image={imgFlutter} name="Flutter(1年)" />
          <SkillInfo image={imgJS} name="JS(勉強中)" />
          <SkillInfo image={imgTS} name="TS(勉強中)" />
          <SkillInfo image={imgCsharp} name="C#(1年)" />
        </div>

        <div className="w-full flex flex-col justify-start items-start space-y-6 mt-14">
          <h2 className="w-full text-center text-2xl font-bold">職務経歴</h2>
          <BusinessInfo
            name="コミュニティアプリと受注管理システムの開発"
            time="2018/4～2018/11（8ヶ月）"
            info="・コミュニティのポストリストとコメントの実現
・Instagram風の画像切り替えエフェクトを備えた画像ウォールと、動画再生機能を実装しました。
・レイアウト最適化、過剰描画の削減
・注文の管理機能を開発・実装しました。"
          />
          <BusinessInfo
            name="記録アプリの開発"
            time="2018/12～2019/12（12ヶ月）"
            info="・ノート、画像バックアップ、歩数記録、身体データなどの機能の実現
・モジュール化"
          />
          <BusinessInfo
            name="フリマアプリの開発"
            time="2020/3～2020/11（9ヶ月）"
            info="・Android作業全般をゼロから開発し、正式リリースまで完了させました。
・ViewModelとLiveDataを採用してライフサイクル管理とデータ駆動型UI更新を実現しました。
・RoomとPagingを採用して、商品リストとコミュニティのポストリストを実現しました。
・Retrofit2とCoroutineを採用してネットワークフレームワークを実装しました。
・Flutterを使用して注文リストおよび注文詳細ページを開発しました。"
          />
          <BusinessInfo
            name="ゲームのSDKの開発"
            time="2021/5～2023/12（30ヶ月）"
            info="・Androidバージョンの適応
・Google Play In-App Review機能の実現
・位置情報、Wi-Fi、Bluetooth、システム情報などの端末情報の取得および保存を実装しました。
・多言語のサポート
・MVVMを使用してアカウントモジュールのリファクタリングを実現しました。
・C#を用いて、Unity側のAPI開発を行いました。"
          />
          <BusinessInfo
            name="日本語学習アプリとノートアプリの開発"
            time="2024/1～2024/12（12ヶ月）"
            info="・位置や画像や音声を取得し、画面上に表示・再生する機能を実装しました。
・WorkManagerを採用してデータバックアップを実現しました。
・Jetpack Composeを使用して、UI画面を実現しました。
・Gemini SDKを採用して日本語のAI検索機能を実現しました。
・SpringBootを使用してサーバーを開発し、APIとデータベースの設計・構築を行いました。"
            showButton={true}
          />
        </div>
        <h2 className="text-center text-2xl font-bold mt-12">趣味</h2>
        <div className="w-full flex flex-wrap justify-center gap-12 mt-8 pb-8">
          <HobbyInfo
            image="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=3590&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="バスケットボール"
          />
          <HobbyInfo
            image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="映画"
          />
          <HobbyInfo
            image="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="ウォーキング・登山"
          />
          <HobbyInfo
            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=3821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="旅行"
          />
        </div>
        <div className="w-full flex justify-center pb-12">
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
