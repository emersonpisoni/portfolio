import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "use-intl";

export default function Contact() {
  const t = useTranslations('index.contact')

  return <section id="section-contact" className="w-full bg-gradient-to-b from-violet-800 to-violet-900 flex flex-col items-center justify-center p-28">
    <h1 className="font-bold text-4xl">{t('title')}</h1>
    <div className="p-20 flex items-center gap-4">
      <Link href={"https://www.linkedin.com/in/emersonpisoni/"} target="_blank" >
        <Image src='/images/linkedin.svg' alt="linkedin icon" width={70} height={80} />
      </Link>
      <Link href={"https://github.com/emersonpisoni"} target="_blank" >
        <Image src='/images/github.svg' alt="linkedin icon" width={55} height={80} />
      </Link>
      <Link href={"mailto:emersonpisoni14@gmail.com"} target="_blank" >
        <Image src='/images/email.svg' alt="linkedin icon" width={80} height={80} />
      </Link>
      <Link href={"https://wa.link/jr19vn"} target="_blank" >
        <Image src='/images/whatsapp.svg' alt="linkedin icon" width={55} height={0} />
      </Link>
    </div>
  </section>
}