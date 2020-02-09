import axois from 'axios';

const resources = {};

const makeRequestCreator = () => {
    let cancel;

    return async query => {
        //check request

        if(cancel){
            cancel.cancel();
        }

        cancel = axois.CancelToken.source();
        try{
            if(resources[query]){
                return resources[query];
            }
            const res = await axois (query, {cancelToken: cancel.token});
            const result = res.data.results;

            resources[query] = result;

            return result;
        }
        catch (error){
            if(axois.isCancel(error)){
                console.log('Request canceled', error.message);
            }
            else {
                console.log('Something went wrong: ', error.message);
            }
        }
    }
}

export const search = makeRequestCreator();