export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  RESET: 'reset',
  FORGET: 'forget',
  LEARN: 'learn',
  LESSON: 'lesson',
  LESSON_DETAIL: 'lesson-detail',
  PROFICIENCY_TEST: 'proficiency-test',
  READ: 'read',
  READ_DETAIL: 'read-detail',
  VIDEO: 'video',
  VIDEO_DETAIL: 'video-detail',
  SPEECH: 'speech',
  WORD_OF_THE_DAY: 'word-of-the-day',

  DASHBOARD: 'dashboard',
  ACHIEVEMENT: 'achievement',
  LEADERBOARD: 'leaderboard',
  SETTING: 'setting',
  CHATBOT: 'chatbot',
  NOT_FOUND: 'not-found',
} as const

export type AppRoutes = typeof AppRoutes[keyof typeof AppRoutes]

export const getRouteHome = () => '/'
export const getRouteLogin = () => '/login'
export const getRouteRegister = () => '/register'
export const getRouteReset = () => '/reset'
export const getRouteForget = () => '/forget'

export const getRouteLearn = () => '/learn'
export const getRouteLesson = () => '/lesson'
export const getRouteLessonDetail = (id: string) => `/lesson/${id}`
export const getRouteProficiencyTest = () => '/proficiency-test'
export const getRouteRead = () => '/read'
export const getRouteReadDetail = (id: string) => `/read/${id}`
export const getRouteVideo = () => '/video'
export const getRouteVideoDetail = (id: string) => `/video/${id}`
export const getRouteSpeech = () => '/speech'
export const getRouteWordOfTheDay = () => '/word-of-the-day'

export const getRouteDashboard = () => '/dashboard'
export const getRouteAchievement = () => '/achievement'
export const getRouteLeaderboard = () => '/leaderboard'
export const getRouteSetting = () => '/setting'

export const getRouteChatbot = () => '/chatbot'

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteHome()]: AppRoutes.HOME,
  [getRouteLogin()]: AppRoutes.LOGIN,
  [getRouteRegister()]: AppRoutes.REGISTER,
  [getRouteReset()]: AppRoutes.RESET,
  [getRouteForget()]: AppRoutes.FORGET,
  [getRouteLearn()]: AppRoutes.LEARN,
  [getRouteLesson()]: AppRoutes.LESSON,
  [getRouteLessonDetail(':id')]: AppRoutes.LESSON_DETAIL,
  [getRouteProficiencyTest()]: AppRoutes.PROFICIENCY_TEST,
  [getRouteRead()]: AppRoutes.READ,
  [getRouteReadDetail(':id')]: AppRoutes.READ_DETAIL,
  [getRouteVideo()]: AppRoutes.VIDEO,
  [getRouteVideoDetail(':id')]: AppRoutes.VIDEO_DETAIL,
  [getRouteSpeech()]: AppRoutes.SPEECH,
  [getRouteWordOfTheDay()]: AppRoutes.WORD_OF_THE_DAY,

  [getRouteDashboard()]: AppRoutes.DASHBOARD,
  [getRouteAchievement()]: AppRoutes.ACHIEVEMENT,
  [getRouteLeaderboard()]: AppRoutes.LEADERBOARD,
  [getRouteSetting()]: AppRoutes.SETTING,

  [getRouteChatbot()]: AppRoutes.CHATBOT,
}
