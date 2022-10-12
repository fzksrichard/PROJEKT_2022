import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzM2RlNzAwZjFjN2I0ZDU3NTMzZGE3NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTUyNjc3NywiZXhwIjoxNjY1Nzg1OTc3fQ.njewjrJD0vp1NBxf28700YSG_CnyTHkgSCXzBRUT51Q"

export const publicRequest=axios.create({
    baseURL: BASE_URL,
})

export const userRequest=axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN} `}
})