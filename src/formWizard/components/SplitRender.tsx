import { Buildable, SplitColumn } from '@daohaus/ui';

import { FormBuilderFactory } from '@daohaus/form-builder-base';

import { FieldLego } from '../types';

type SplitColumnProps = {
  id: string;
  rows: { rowId: string; left: FieldLego; right: FieldLego }[];
};

export const SplitColumnLayout = ({
  rows,
  ...props
}: Buildable<SplitColumnProps>) => {
  return (
    <SplitColumn
      rows={rows.map(({ left, right, rowId }) => {
        return {
          rowId,
          left: <FormBuilderFactory {...props} field={left} />,
          right: <FormBuilderFactory {...props} field={right} />,
        };
      })}
    />
  );
};
