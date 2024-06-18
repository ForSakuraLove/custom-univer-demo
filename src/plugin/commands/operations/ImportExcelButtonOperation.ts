import type { ICommand } from '@univerjs/core';
import { CommandType } from '@univerjs/core';
import type { IAccessor } from '@wendellhu/redi';

export const ImportExcelButtonOperation: ICommand = {
    id: 'custom-menu.operation.ImportExcel',
    type: CommandType.OPERATION,
    handler: async (accessor: IAccessor) => {
        alert('Single button operation');
        return true;
    },
};