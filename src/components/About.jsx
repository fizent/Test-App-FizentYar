import { Link } from "react-router-dom";
import Back_Btn from "./Back";
import FooterCom from "./FooterC";
import { Typography } from "@mui/material";
import FooterC from "./FooterC";
export default function About() {
  return (
    <div className="container_card_box">
      <Back_Btn />

      <Typography className="Fiz title_page" variant="h3">
        FizentYar
      </Typography>

      <Typography className="sub_page_title" variant="subtitle1">
        این نرم‌افزار توسط فاضل زارع طراحی و توسعه یافته است.
      </Typography>

      <Typography variant="h5" className="type_mg sub_page_title" style={{ marginTop: "24px" }}>
        درباره برنامه:
      </Typography>

      <div className="sub_page_title" style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
        <Typography variant="body1" className="type_mg">
          FizentYar یک اپلیکیشن کاربردی برای مدیریت، مشاهده و تحلیل داده‌ها در حوزه‌های مختلف فنی و فناوری است. هدف اصلی این برنامه، ساده‌سازی فرآیندهای پیچیده و ارائه راه‌حل‌های هوشمندانه و سریع برای کاربران است، به‌ویژه کسانی که در حوزه‌هایی مانند مهندسی برق، اینترنت اشیاء و هوش مصنوعی فعالیت دارند.
        </Typography>

        <Typography variant="body1" className="type_mg">
          این برنامه با رابط کاربری ساده اما حرفه‌ای طراحی شده تا کاربران در سطوح مختلف بتوانند از آن بهره‌مند شوند. از دانش‌آموزان و علاقه‌مندان به تکنولوژی گرفته تا متخصصان حوزه اتوماسیون صنعتی می‌توانند با FizentYar تعامل مؤثری داشته باشند.
        </Typography>

        <Typography variant="body1" className="type_mg">
          یکی از مزیت‌های کلیدی FizentYar قابلیت اجرا به صورت Progressive Web App (PWA) است، به این معنا که بدون نیاز به نصب از فروشگاه‌های نرم‌افزاری می‌توان آن را مستقیماً روی مرورگر یا به صورت آفلاین استفاده کرد. همچنین این اپلیکیشن به گونه‌ای طراحی شده است که بتواند به سخت‌افزارهای الکترونیکی متصل شود و در پروژه‌های اینترنت اشیاء یا مانیتورینگ لحظه‌ای به‌کار گرفته شود.
        </Typography>

        <Typography variant="body1" className="type_mg">
          توسعه‌ی این اپلیکیشن با تمرکز بر سادگی، سرعت، و قابلیت گسترش‌پذیری انجام شده است و در آینده امکانات پیشرفته‌تری مانند گزارش‌گیری هوشمند، اتصال به APIهای صنعتی، تحلیل تصویر، و کنترل از راه دور نیز به آن افزوده خواهد شد.
        </Typography>

        <Typography variant="h6" className="type_mg" style={{ marginTop: "32px" }}>
          درباره توسعه‌دهنده:
        </Typography>

        <Typography variant="body2" className="type_mg">
          فاضل زارع، توسعه‌دهنده‌ی جوان وب و اپلیکیشن، دانش‌آموز رشته برق و اتوماسیون صنعتی، با علاقه‌مندی به ترکیب تکنولوژی با مهندسی برای ساخت ابزارهای هوشمند، کاربردی و قابل دسترس برای همه.
        </Typography>

        <Typography variant="h6" className="type_mg" style={{ marginTop: "32px" }}>
          اطلاعات تماس و صفحات اجتماعی:
        </Typography>

        <Typography variant="body1" className="type_mg" style={{ marginTop: "12px" }}>
          وب‌سایت شخصی:
          <a
            href="https://fazelzare.liara.run/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#3f51b5",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "8px",
              display: "inline-block"
            }}
          >
            fazelzare.liara.run
          </a>
        </Typography>

        <Typography variant="body1" className="type_mg pd80" style={{ marginTop: "12px" }}>
          صفحات اجتماعی:
          <ul style={{ listStyle: "none", padding: 0, marginTop: "8px", lineHeight: "1.8" }}>
            <li>
              <a
                href="https://instagram.com/fazel.zare.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#e1306c", fontWeight: "bold" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/fazelzare"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333", fontWeight: "bold" }}
              >
                GitHub
              </a>
            </li>
          </ul>
        </Typography>
      </div>
      <FooterC />

      {/* <FooterCom /> */}
    </div>
  );
}
