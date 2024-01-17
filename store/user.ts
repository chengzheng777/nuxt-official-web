// export const useIsLogin = () => useState(() => false);

export const useUser = defineStore('user', {
    state: () => ({
        isLogin: false,
        websiteName: '房讯通',
        slogan: 'xxxx',
        logo: '',
    })
})