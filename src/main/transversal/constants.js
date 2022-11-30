const SECURITY_API_BASE = "https://g3xphpg3r8.execute-api.us-east-1.amazonaws.com";
const USER_API_BASE = "https://ok8yoxqqfd.execute-api.us-east-1.amazonaws.com";

export default Object.freeze({
    API: {
        auth: {
            signIn: `${SECURITY_API_BASE}/dev/pspc/security/auth/sign-in`,
        },
        user: {
            create: `${USER_API_BASE}/dev/pspc/security/users`
        }
    }
});