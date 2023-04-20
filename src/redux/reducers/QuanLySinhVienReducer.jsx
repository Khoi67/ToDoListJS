
const stateDefault = {
    mangSinhVien: [{maSV: 1, hoTen: "Do Nguyen Khoi", soDienThoai: "0123456111", email: "khoi67@gmail.com"}],
    keywordSinhVien: "",
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    // console.log(action)
    switch(action.type){
        case "THEM_SV": {
            let mangSV = [...state.mangSinhVien, action.sinhVien];
            state.mangSinhVien = mangSV;

            return {...state}
        }
        case "XOA_SV":{
            let mangSV = [...state.mangSinhVien];
            mangSV.splice(action.index, 1);

            state.mangSinhVien = mangSV;

            return {...state}   
        }
        case "TIM_KIEM":{
            state.keywordSinhVien = action.keywordSinhVien;
            return {...state}
        }
        default: 
            return {...state}

    }
}