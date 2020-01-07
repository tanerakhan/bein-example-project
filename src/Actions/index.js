import axios from 'axios';

export const dataCreator = (dataParam) => {
    return {
        type:'DATALOAD',
        dataParam
    }
}

export const filterCreator = (details) => {
    return {
        type: 'FILTER',
        details
    }
}

export const data = () => {
    let searchUrl = `https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON`;
    return (dispatch) => {
         axios.get(searchUrl).then((res) => {
                const searchData = res.data;
                dispatch(dataCreator(searchData))
                        },
                (err) => {
                    console.log(err);
                }
        )
    }
}

export const filter = (details) => {
    return (dispatch) => {
        dispatch(filterCreator(details))
    }
}