export interface JobState {
    jobs:any[];
    loading: boolean;
    error: null | string;
}

export enum JobActionTypes{
    FETCH_JOBS = 'FETCH_JOBS',
    FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS',
    FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR',

    DELETE_JOB = 'DELETE_JOB',
    DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS',
    DELETE_JOB_ERROR = 'DELETE_JOB_ERROR',

    UPDATE_JOB = 'UPDATE_JOB',
    UPDATE_JOB__SUCCESS = 'UPDATE_JOB__SUCCESS',
    UPDATE_JOB_ERROR = 'UPDATE_JOB_ERROR',

    FETCH_WEEK_JOBS = 'FETCH_WEEK_JOBS',
    FETCH_WEEK_JOBS_SUCCESS = 'FETCH_WEEK_JOBS_SUCCESS',
    FETCH_WEEK_JOBS_ERROR = 'FETCH_WEEK_JOBS_ERROR',
}

interface FetchJobAction{
    type: JobActionTypes.FETCH_JOBS;
}

interface FetchJobSuccessAction{
    type: JobActionTypes.FETCH_JOBS_SUCCESS;
    payload: any[];
}

interface FetchJobErrorAction{
    type: JobActionTypes.FETCH_JOBS_ERROR;
    payload: string;
}

interface DeleteJobAction{
    type: JobActionTypes.DELETE_JOB;
}

interface DeleteJobSuccessAction{
    type: JobActionTypes.DELETE_JOB_SUCCESS;
    payload: number;
}

interface DeleteJobErrorAction{
    type: JobActionTypes.DELETE_JOB_ERROR;
    payload: string;
}

interface UpdateJobAction{
    type: JobActionTypes.UPDATE_JOB;
}

interface UpdateJobSuccessAction{
    type: JobActionTypes.UPDATE_JOB__SUCCESS;
    payload: any;
}

interface UpdateJobErrorAction{
    type: JobActionTypes.UPDATE_JOB_ERROR;
    payload: string;
}

interface FetchWeekJobAction{
    type: JobActionTypes.FETCH_WEEK_JOBS;
}

interface FetchWeekJobSuccessAction{
    type: JobActionTypes.FETCH_WEEK_JOBS_SUCCESS;
    payload: any[];
}

interface FetchWeekJobErrorAction{
    type: JobActionTypes.FETCH_WEEK_JOBS_ERROR;
    payload: string;
}

export type JobAction = FetchJobAction | 
                            FetchJobSuccessAction | 
                            FetchJobErrorAction | 
                            DeleteJobAction | 
                            DeleteJobSuccessAction | 
                            DeleteJobErrorAction |
                            UpdateJobAction |
                            UpdateJobSuccessAction |
                            UpdateJobErrorAction |
                            FetchWeekJobAction |
                            FetchWeekJobSuccessAction |
                            FetchWeekJobErrorAction
