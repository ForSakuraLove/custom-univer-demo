import type { ICommand } from '@univerjs/core';
import { CommandType } from '@univerjs/core';
import type { IAccessor } from '@wendellhu/redi';

export const ExportExcelButtonOperation: ICommand = {
    id: 'custom-menu.operation.ExportExcel',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        alert('Single button operation');
        return true;
    },
};