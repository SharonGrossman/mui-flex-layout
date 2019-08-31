# mui-flex-layout :muscle:
![BuildStatus](https://travis-ci.org/SharonGrossman/mui-flex-layout.svg?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install
```
yarn add --dev mui-flex-layout
```

## Description
A simple reuseable solution to using material-ui <Box> with flex alignments

## Usage

### Layout
A full width & height container with flex-direction alignment up to your choosing.

```
import Layout from 'mui-flex-layout';
...
<Layout color={'#fffff'} flex-direction={'column'}>
    <Toolbar />
    <Navbar />
    <Content />
</Layout>
```

### Row
A flex row container

```
import { Row } from 'mui-flex-layout';
...
<Row height={} width={}>
    <RowItem />
    <RowItem />
    <RowItem />
</Row>
```

### Column
A flex column container

```
import { Column } from 'mui-flex-layout';
...
<Column height={} width={}>
    <ColumnItem />
    <ColumnItem />
    <ColumnItem />
</Column>
```

### Padded
A Box with p={1} as a default
```
import { Padded } from 'mui-flex-layout';
...
<Padded padding={}>
    <ItemWithPadding />
</Padded>
<Padded>
  <SecondItemWithPadding />
</Padded
```

## License

[MIT](LICENSE) © [Sharon Grossman](https://github.com/sharongrossman)