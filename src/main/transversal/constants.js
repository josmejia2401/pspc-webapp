const SECURITY_API_BASE = "https://b75vb6zrw5.execute-api.us-east-1.amazonaws.com";
const USER_API_BASE = "https://m7ql0m7fbd.execute-api.us-east-1.amazonaws.com";
const PROJECT_API_BASE = "https://p099bzxu1j.execute-api.us-east-1.amazonaws.com";
const USERS_STORY_API_BASE = "https://j4m2v41nj5.execute-api.us-east-1.amazonaws.com";
const TASKS_STORY_API_BASE = "https://adgpffevtg.execute-api.us-east-1.amazonaws.com";

export default Object.freeze({
    API: {
        auth: {
            signIn: `${SECURITY_API_BASE}/dev/pspc/security/auth/sign-in`,
            signOut: `${SECURITY_API_BASE}/dev/pspc/security/auth/sign-out`,
        },
        user: {
            create: `${USER_API_BASE}/dev/pspc/clients/users`,
            activate: `${USER_API_BASE}/dev/pspc/security/users-activate`,
        },
        projects: {
            create: `${PROJECT_API_BASE}/dev/pspc/manage/projects`,
            getById: `${PROJECT_API_BASE}/dev/pspc/manage/projects/:id`,
            getAll: `${PROJECT_API_BASE}/dev/pspc/manage/projects`,
            update: `${PROJECT_API_BASE}/dev/pspc/manage/projects/:id`,
            delete: `${PROJECT_API_BASE}/dev/pspc/manage/projects/:id`,
        },
        usersStory: {
            create: `${USERS_STORY_API_BASE}/dev/pspc/manage/users-story`,
            getById: `${USERS_STORY_API_BASE}/dev/pspc/manage/users-story/:id`,
            getAll: `${USERS_STORY_API_BASE}/dev/pspc/manage/users-story`,
            update: `${USERS_STORY_API_BASE}/dev/pspc/manage/users-story/:id`,
            delete: `${USERS_STORY_API_BASE}/dev/pspc/manage/users-story/:id`,
        },
        tasks: {
            create: `${TASKS_STORY_API_BASE}/dev/pspc/manage/tasks`,
            getById: `${TASKS_STORY_API_BASE}/dev/pspc/manage/tasks/:id`,
            getAll: `${TASKS_STORY_API_BASE}/dev/pspc/manage/tasks`,
            update: `${TASKS_STORY_API_BASE}/dev/pspc/manage/tasks/:id`,
            delete: `${TASKS_STORY_API_BASE}/dev/pspc/manage/tasks/:id`,
        }
    },
    STATUS: {
        1: "ACTIVE",
        2: "INACTIVE",
        3: "COMPLETED"
    },
    PRIORITY: {
        1: "VERY LOW",
        2: "LOW",
        3: "HALF",
        4: "HIGH",
        5: "VERY HIGH"
    },
    PHASE: {
        1: "ANALISYS",
        2: "DESIGN",
        3: "IMPLEMENTATION",
        4: "COMPILATION",
        5: "TESTING",
        6: "DEPLOY",
        7: "MAINTENANCE",
    }
});