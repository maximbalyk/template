export function bubbleSort(array, compare) {
    let myArr = [...array];
    let count;
    do {
        count = 0;
        for (let i = 1; i < array.length; i++) {
            const prev = myArr[i - 1];
            const current = myArr[i];
            if (compare(prev, current) > 0) {
                count++;
                myArr[i - 1] = current;
                myArr[i] = prev;
            }
        }
    } while (count > 0);
    return myArr;
}
export function generateNewPeople() {
    let minYear = 1970;
    let maxYear = 2005;
    let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;

    let newPerson = {
        id: Math.ceil(Math.random() * 10000),
        name: "Анна",
        birthYear: newYear,
        bio: {
            1990: "Народилась у Львові.",
            2008: "Вступила до Львівського університету.",
            2012: "Закінчила університет та почала працювати в IT-компанії.",
            2020: "Стала керівником віділу розробки.",
        },
    };

    let name;
    switch (true) {
        case newPerson.birthYear > 2000:
            return { ...newPerson, name: "Богдана" };
        case newPerson.birthYear > 1990:
            return { ...newPerson, name: "Інна" };
        case newPerson.birthYear > 1980:
            name = "Петро";
            return { ...newPerson, name: "Петро" };
        case newPerson.birthYear > 1970:
            name = "Анна";
            return { ...newPerson, name: "Анна" };
        default:
            return { ...newPerson, name: "Cаша" };
    }
}
export function generateDeal() {
    let minYear = 1970;
    let maxYear = 2005;
    let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;
    let number = Math.floor(Math.random() * 100000000);
    switch (true) {
        case newYear > 2000:
            return [`Нарахував ${number} зірок`, newYear];
        case newYear > 1990:
            return [`З'їв ${number}  мікро піц`, newYear];

        case newYear > 1980:
            return [`Прожив ${number} секунд`, newYear];

        case newYear > 1970:
            return [`Проспав ${number} секунд`, newYear];

        default:
            return ["Став керівником відділу продажів в пекарні", newYear];
    }
}
