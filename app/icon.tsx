import Image from "next/image";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 52,
};

export const contebtType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div className="">
        <Image src="/app/favicon.ico" alt="icon" />
      </div>
    ),
    { ...size }
  );
}
