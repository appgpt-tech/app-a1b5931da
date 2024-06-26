//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const pokemonsTitle = () => {
  const record = useRecordContext();
  return <span>pokemons {record ? `"${record.id}"` : ''}</span>;
};

export const pokemonsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <BooleanField source="giganticPowerActivation" />
      <BooleanField source="powerMaximization" />
      <TextField source="attackMechanism" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const pokemonsEdit = () => (
  <Edit title={<pokemonsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <BooleanInput source="giganticPowerActivation" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="powerMaximization" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="attackMechanism" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const pokemonsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <BooleanInput source="giganticPowerActivation" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="powerMaximization" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="attackMechanism" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
];
