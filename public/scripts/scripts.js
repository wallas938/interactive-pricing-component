const slider = document.querySelector('#sliderId');
const toggle = document.querySelector('.toggle');
const pages = document.querySelector('.pages');
const bill = document.querySelector('.bill');
/* Variables */
let toggled = false;
const datas = [
    {
        pageViews: 10,
        perMonth: 8,
        perYear: 96 - 24,
        step: 1
    },
    {
        pageViews: 50,
        perMonth: 12,
        perYear: 144 - 36,
        step: 2
    },
    {
        pageViews: 100,
        perMonth: 16,
        perYear: 192 - 48,
        step: 3
    },
    {
        pageViews: 500,
        perMonth: 24,
        perYear: 288 - 72,
        step: 4
    },
    {
        pageViews: 1,
        perMonth: 36,
        perYear: 432 - 108,
        step: 5
    },
];
getMonthlyBilling(slider.valueAsNumber);

slider.addEventListener('input', function (e) {
    if (toggled) {
        return getYearlyBilling(e.target.value);
    }
    getMonthlyBilling(e.target.value);
});

slider.addEventListener('mouseup', function (e) {
    if (toggled) {
        return getYearlyBilling(e.target.value);
    }
    getMonthlyBilling(e.target.value);
});

toggle.addEventListener('click', function (e) {
    if (!toggled) {
        getYearlyBilling(slider.valueAsNumber);
        toggle.classList.add('toggled');
        toggled = true;
        return;
    }
    getMonthlyBilling(slider.valueAsNumber);
    toggle.classList.remove('toggled');
    toggled = false;
});

function getMonthlyBilling(rangeValue) {
    datas.forEach(data => {
        if (data.step == rangeValue) {
            pages.textContent = rangeValue < 5 ?
                datas[+rangeValue - 1].pageViews + "K Pageviews" :
                datas[+rangeValue - 1].pageViews + "M Pageviews";

            bill.textContent = datas[+rangeValue - 1].perMonth;
        }
    });
}

function getYearlyBilling(rangeValue) {
    datas.forEach(data => {
        if (data.step == rangeValue) {
            pages.textContent = rangeValue < 5 ?
                datas[+rangeValue - 1].pageViews + "K Pageviews" :
                datas[+rangeValue - 1].pageViews + "M Pageviews";

            bill.textContent = datas[+rangeValue - 1].perYear;
        }
    });
}

