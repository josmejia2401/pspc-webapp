const SECURITY_API_BASE = "https://z700n9652g.execute-api.us-east-1.amazonaws.com";
const USER_API_BASE = "https://sz8o589y56.execute-api.us-east-1.amazonaws.com";
const PROJECT_API_BASE = "https://rmm4spoed7.execute-api.us-east-1.amazonaws.com";

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
        }
    }
});