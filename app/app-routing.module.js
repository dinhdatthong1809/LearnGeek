import { app } from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider) => {

    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        {
            name: '/',
            url: '/',
            component: "appHome"
        },
        {
            name: 'khoa-hoc',
            url: '/khoa-hoc',
            component: 'appKhoaHoc',
            resolve: {
                subjects: subjectService => subjectService.getAll()
            }
        },
        {
            name: 'luyen-tap',
            url: '/luyen-tap',
            component: "appLuyenTap"
        },
        {
            name: 'thao-luan',
            url: '/thao-luan',
            component: "appThaoLuan"
        },
        {
            name: 'hoi-dap',
            url: '/hoi-dap',
            component: 'appHoiDap'
        },
        {
            name: 'xac-thuc',
            url: '/xac-thuc',
            component: 'appXacThuc'
        },
        {
            parent: 'xac-thuc',
            name: 'dang-nhap',
            url: '/dang-nhap',
            component: 'appDangNhap',
        },
        {
            parent: 'xac-thuc',
            name: 'quen-mat-khau',
            url: '/quen-mat-khau',
            component: 'appQuenMatKhau',
        },
        {
            name: 'trang-ca-nhan',
            url: '/trang-ca-nhan',
            component: 'appTrangCaNhan',
            // xem chi tiết tại ./global/yeu-cau-dang-nhap.hook.js
            data: { requiresAuth: true },
            resolve: {
                account: ($state, authenticationService, accountService) => {
                    let username = "";

                    authenticationService.learnGeekAuth.onAuthStateChanged((user) => {
                        if (user) {
                            username = user.displayName;
                        } else {
                            $state.go('dang-nhap', undefined, {reload: true});
                        }
                    });

                    return accountService
                        .getOne(username)
                        .then(
                            (doc) => {
                                return doc.data();
                            }
                        );
                }
            }
        },
    ];

    routes.forEach(route => $stateProvider.state(route));
});