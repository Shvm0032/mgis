import StudentHero from "@/components/StudentLife/StudentHero";
import StudentActivities from "@/components/StudentLife/StudentActivities";
import CurricularActivities from "@/components/StudentLife/CurricularActivities";
import EnviromentInitiative from "@/components/StudentLife/EnviromentInitiative";
import ServiceLearning from "@/components/StudentLife/ServiceLearning";
import StudentCounsil from "@/components/StudentLife/StudentCounsil";
import ProjectDay from "@/components/StudentLife/ProjectDay";
import AnnualDay from "@/components/StudentLife/AnnualDay";
import StudentAchievement from "@/components/StudentLife/StudentAchievement";
import KinderKarten from "@/components/StudentLife/KinderKarten";
import TeacherDay from "@/components/StudentLife/TeacherDay";
import Arts from "@/components/StudentLife/Arts";

export default function StudentLife() {
  return (
    <div className="min-h-screen">
      <main>
        <StudentHero />
        <StudentActivities />
        <CurricularActivities />
        <EnviromentInitiative />
        <ServiceLearning />
        <StudentCounsil />
        <ProjectDay />
        <AnnualDay />
        <StudentAchievement />
        <KinderKarten />
        <TeacherDay />
        <Arts />
      </main>
    </div>
  );
}
