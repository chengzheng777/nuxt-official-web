// export const useIsLogin = () => useState(() => false);

export const useUser = defineStore('user', {
    state: () => ({
        isLogin: false
    })
})