import React from 'react';
import { Select as AntSelect, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
];

const Select = () => (
  <AntSelect
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="Select one country"
    defaultValue={['china']}
    onChange={handleChange}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {option.data.desc}
      </Space>
    )}
  />
);

export default Select;
