import { headers } from "next/headers";
import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";
import { APK_URL, APK_VERSION, APK_SIZE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "تحميل تطبيق ويجو يمن | Download Wego Yemen App",
  description:
    "حمّل تطبيق ويجو يمن للأندرويد مجاناً. الإصدار الأحدث متاح الآن.",
};

// Detect device type server-side
function detectDevice(userAgent: string): "android" | "ios" | "desktop" {
  const ua = userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad")) return "ios";
  return "desktop";
}

export default async function DownloadPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const device = detectDevice(userAgent);

  return (
    <DownloadClient
      device={device}
      apkUrl={APK_URL}
      version={APK_VERSION}
      size={APK_SIZE}
    />
  );
}
