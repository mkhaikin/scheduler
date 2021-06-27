export interface WorklogState {
    worklog:any[];
    worklogsum:any[];
    loading: boolean;
    error: null | string;
}

export enum WorklogActionTypes{
    FETCH_WORKLOG = 'FETCH_WORKLOG',
    FETCH_WORKLOG_SUCCESS = 'FETCH_WORKLOG_SUCCESS',
    FETCH_WORKLOG_ERROR = 'FETCH_WORKLOG_ERROR',

    FETCH_WEEK_WORKLOG = 'FETCH_WEEK_WORKLOG',
    FETCH_WEEK_WORKLOG_SUCCESS = 'FETCH_WEEK_WORKLOG_SUCCESS',
    FETCH_WEEK_WORKLOG_ERROR = 'FETCH_WEEK_WORKLOG_ERROR',

    FETCH_SUM_WORKLOG = 'FETCH_SUM_WORKLOG',
    FETCH_SUM_WORKLOG_SUCCESS = 'FETCH_SUM_WORKLOG_SUCCESS',
    FETCH_SUM_WORKLOG_ERROR = 'FETCH_SUM_WORKLOG_ERROR',

    UPDATE_WORKLOG = 'UPDATE_WORKLOG',
    UPDATE_WORKLOG__SUCCESS = 'UPDATE_WORKLOG__SUCCESS',
    UPDATE_WORKLOG_ERROR = 'UPDATE_WORKLOG_ERROR',
}

interface FetchWorklogAction{
    type: WorklogActionTypes.FETCH_WORKLOG;
}

interface FetchWorklogSuccessAction{
    type: WorklogActionTypes.FETCH_WORKLOG_SUCCESS;
    payload: any[];
}

interface FetchWorklogErrorAction{
    type: WorklogActionTypes.FETCH_WORKLOG_ERROR;
    payload: string;
}

interface FetchWeekWorklogAction{
    type: WorklogActionTypes.FETCH_WEEK_WORKLOG;
}

interface FetchWeekWorklogSuccessAction{
    type: WorklogActionTypes.FETCH_WEEK_WORKLOG_SUCCESS;
    payload: any[];
}

interface FetchWeekWorklogErrorAction{
    type: WorklogActionTypes.FETCH_WEEK_WORKLOG_ERROR;
    payload: string;
}

interface FetchSumWorklogAction{
    type: WorklogActionTypes.FETCH_SUM_WORKLOG;
}

interface FetchSumWorklogSuccessAction{
    type: WorklogActionTypes.FETCH_SUM_WORKLOG_SUCCESS;
    payload: any[];
}

interface FetchSumWorklogErrorAction{
    type: WorklogActionTypes.FETCH_SUM_WORKLOG_ERROR;
    payload: string;
}

interface UpdateWorklogAction{
    type: WorklogActionTypes.UPDATE_WORKLOG;
}

interface UpdateWorklogSuccessAction{
    type: WorklogActionTypes.UPDATE_WORKLOG__SUCCESS;
    payload: any;
}

interface UpdateWorklogErrorAction{
    type: WorklogActionTypes.UPDATE_WORKLOG_ERROR;
    payload: string;
}

export type WorklogAction = FetchWorklogAction | 
                            FetchWorklogSuccessAction | 
                            FetchWorklogErrorAction | 
                            UpdateWorklogAction |
                            UpdateWorklogSuccessAction |
                            UpdateWorklogErrorAction |
                            FetchWeekWorklogAction |
                            FetchWeekWorklogSuccessAction |
                            FetchWeekWorklogErrorAction |
                            FetchSumWorklogAction |
                            FetchSumWorklogSuccessAction |
                            FetchSumWorklogErrorAction