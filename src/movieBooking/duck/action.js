import { CHAIR_BOOKING, PAY } from "./type";

export const chairBookingAction = (payload) =>{
    return {
        type: CHAIR_BOOKING,
        // object literal
        payload
    }
}

export const payChair =  () => {
    return {
        type: PAY,
    }
}