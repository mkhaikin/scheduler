export interface IUser{
    email: string;
    badge: {_id: string;
            _activated: boolean;
            _positionid: string;
        }
}