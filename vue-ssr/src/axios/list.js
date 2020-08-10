import axios from './index';

export async function getList1 () {
    // return new Promise((resolove) => {
    //     axios.get('/1635-1')
    // });
    const res = await axios.get('/api/getList1');
    return res;
}
