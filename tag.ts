import {AbstractAuditedDto} from "../../../common/model/abstractAuditedDto";

export interface Tag extends AbstractAuditedDto{

    color?:string;
    name?: string;
    number?: number;

}
