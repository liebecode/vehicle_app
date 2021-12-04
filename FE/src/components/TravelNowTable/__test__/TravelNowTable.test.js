import { DataGrid } from '@mui/x-data-grid';
import { render } from '@testing-library/react';

const Repro = () => {
  return (
    <DataGrid
      columns={
        [
          {
            field: 'field',
            headerName: 'col',
            flex: 1,
          },
        ]
      }
      rows={[
        {
          id: 'row1',
          field: 'row',
        },
      ]}
    />
  );
};

const createRender = () => {
  return render(<Repro />);
};

describe('Datagrid problem', () => {
  test('should render col', () => {
    const { getByText } = createRender();
    expect(getByText('col')).toBeInTheDocument();
  });
  test('should render row', () => {
    const { getByText } = createRender();
    expect(getByText('row')).toBeInTheDocument();
  });
});