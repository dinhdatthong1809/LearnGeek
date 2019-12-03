import { AppComponent } from './app.component.js';
import { FooterComponent } from './footer.component.js';

import { HomeComponent } from './home/home.component.js';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component.js';
import { KhoaHocComponent } from './khoa-hoc/khoa-hoc.component.js';
import { HoiDapComponent } from './hoi-dap/hoi-dap.component.js';
import { XacThucComponent } from './xac-thuc/xac-thuc.component.js';
import { DangNhapComponent } from './xac-thuc/dang-nhap/dang-nhap.component.js';
import { QuenMatKhauComponent } from './xac-thuc/quen-mat-khau/quen-mat-khau.component.js';
import { DangKyComponent } from './dang-ky/dang-ky.component.js';
import { LuyenTapComponent } from './luyen-tap/luyen-tap.component.js';

import { subjectModule } from './modules/subject-module/subject.module.js';

export let app = angular.module('myApp',
    [
        'ui.router',
        'subjectModule',
    ]
);

/* Components */
app
    .component("appRoot", AppComponent)
        .component("appFooter", FooterComponent)

    .component("appHome", HomeComponent)
        .component("appGioiThieu", GioiThieuComponent)
        .component("appDangKy", DangKyComponent)

    .component("appKhoaHoc", KhoaHocComponent)
    .component("appLuyenTap", LuyenTapComponent)
    .component("appHoiDap", HoiDapComponent)

    .component("appXacThuc", XacThucComponent)
        .component("appDangNhap", DangNhapComponent)
        .component("appQuenMatKhau", QuenMatKhauComponent)
    ;

/* Services */
app.service('anchorSmoothScroll', function () {
    this.scrollTo = function (eID) {
        angular.element(document).ready(() => {

            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            let startY = currentYPosition();
            let stopY = elmYPosition(eID);
            let distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY); return;
            }
            let speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            let step = Math.round(distance / 25);
            let leapY = stopY > startY ? startY + step : startY - step;
            let timer = 0;
            if (stopY > startY) {
                for (let i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                } return;
            }
            for (let i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                let elm = document.getElementById(eID);
                let y = elm.offsetTop;
                let node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                } return y;
            }
        });
    };
});

angular.element(document).ready(() => {
    angular.bootstrap(document, ['myApp'])
});