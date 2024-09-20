"use client";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { LayoutContent } from "@/components/layout/LayoutContent";
import { LayoutMain } from "@/components/layout/LayoutMain";
import { MainContent } from "@/components/mainContent/MainContent";
import { Activity } from "@/components/sideContent/Activity";
import { Channel } from "@/components/sideContent/Channels";

export default function Home() {
  return (
    <LayoutMain>
      <Breadcrumb />
      <LayoutContent
        content={
          <>
            <MainContent title={"Video"} navigateTitle={"Browser all videos"} />
            <MainContent title="People" navigateTitle={"View All"} />
            <MainContent
              title="Documents"
              navigateTitle="Browser all documents"
            />
          </>
        }
        sideContent={
          <>
            <Activity />
            <Channel />
          </>
        }
      />
    </LayoutMain>
  );
}
