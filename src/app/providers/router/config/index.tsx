import { HomePage } from '@pages/home'
import { LoginPage } from '@pages/login'
import { RegisterPage } from '@pages/register'
import { ResetPage } from '@pages/reset'
import { ForgetPage } from '@pages/forget'
import { LearnPage } from '@pages/learn'
import { LessonPage } from '@pages/lesson'
import { LessonDetailPage } from '@pages/lesson-detail'
import { ProficiencyTestPage } from '@pages/proficiency-test'
import { ReadPage } from '@pages/read'
import { ReadDetailPage } from '@pages/read-detail'
import { VideoPage } from '@pages/video'
import { VideoDetailPage } from '@pages/video-detail'
import { SpeechPage } from '@pages/speech'
import { WordOfTheDayPage } from '@pages/word-of-the-day'
import { DashboardPage } from '@pages/dashboard'
import { AchievementPage } from '@pages/achievement'
import { LeaderboardPage } from '@pages/leaderboard'
import { SettingPage } from '@pages/setting'
import { ChatbotPage } from '@pages/chatbot'
import { NotFoundPage } from '@pages/not-found'

import {
  AppRoutes,
  getRouteHome,
  getRouteLogin,
  getRouteRegister,
  getRouteReset,
  getRouteForget,
  getRouteLearn,
  getRouteLesson,
  getRouteLessonDetail,
  getRouteProficiencyTest,
  getRouteRead,
  getRouteReadDetail,
  getRouteVideo,
  getRouteVideoDetail,
  getRouteSpeech,
  getRouteWordOfTheDay,
  getRouteDashboard,
  getRouteAchievement,
  getRouteLeaderboard,
  getRouteSetting,
  getRouteChatbot,
} from '@shared/const/router.ts'

import type { AppRoutesProps } from '@shared/types/router.ts'

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: getRouteRegister(),
    element: <RegisterPage />,
  },
  [AppRoutes.RESET]: {
    path: getRouteReset(),
    element: <ResetPage />,
  },
  [AppRoutes.FORGET]: {
    path: getRouteForget(),
    element: <ForgetPage />,
  },
  [AppRoutes.LEARN]: {
    path: getRouteLearn(),
    element: <LearnPage />,
  },
  [AppRoutes.LESSON]: {
    path: getRouteLesson(),
    element: <LessonPage />,
  },
  [AppRoutes.LESSON_DETAIL]: {
    path: getRouteLessonDetail(':id'),
    element: <LessonDetailPage />,
  },
  [AppRoutes.PROFICIENCY_TEST]: {
    path: getRouteProficiencyTest(),
    element: <ProficiencyTestPage />,
  },
  [AppRoutes.READ]: {
    path: getRouteRead(),
    element: <ReadPage />,
  },
  [AppRoutes.READ_DETAIL]: {
    path: getRouteReadDetail(':id'),
    element: <ReadDetailPage />,
  },
  [AppRoutes.VIDEO]: {
    path: getRouteVideo(),
    element: <VideoPage />,
  },
  [AppRoutes.VIDEO_DETAIL]: {
    path: getRouteVideoDetail(':id'),
    element: <VideoDetailPage />,
  },
  [AppRoutes.SPEECH]: {
    path: getRouteSpeech(),
    element: <SpeechPage />,
  },
  [AppRoutes.WORD_OF_THE_DAY]: {
    path: getRouteWordOfTheDay(),
    element: <WordOfTheDayPage />,
  },
  [AppRoutes.DASHBOARD]: {
    path: getRouteDashboard(),
    element: <DashboardPage />,
  },
  [AppRoutes.ACHIEVEMENT]: {
    path: getRouteAchievement(),
    element: <AchievementPage />,
  },
  [AppRoutes.LEADERBOARD]: {
    path: getRouteLeaderboard(),
    element: <LeaderboardPage />,
  },
  [AppRoutes.SETTING]: {
    path: getRouteSetting(),
    element: <SettingPage />,
  },
  [AppRoutes.CHATBOT]: {
    path: getRouteChatbot(),
    element: <ChatbotPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
} as const
