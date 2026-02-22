import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata = { title: "Arts For Chat" };

const arts = [
  { id: 1, title: "Tinaquilla", desc: "Moth", file: "/moth.gif" },
  { id: 2, title: "TheGentleManYeti", desc: "Dragon", file: "/yetidragon.gif" },
];

export default function Arts() {
  return (
    <PageLayout title="Arts For Chat">
      <p>Drawings from redeem</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {arts.map((art) => (
          <div
            key={art.id}
            className="art-card rounded-lg overflow-hidden border"
          >
            <div className="w-full aspect-video relative">
              <Image
                src={art.file}
                alt={art.title}
                fill
                className="object-contain  p-4"
                unoptimized
              />
            </div>
            <div className="px-4 py-3">
              <p
                className="font-bold m-0 tracking-wide"
                style={{ color: "#f3e6c8" }}
              >
                {art.title}
              </p>
              <p className="text-sm m-0 mt-1" style={{ opacity: 0.5 }}>
                {art.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
