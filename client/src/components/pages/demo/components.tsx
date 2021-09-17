import React, { useState } from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { Button } from '@client/components/shared/button/button';
import { Link } from '@client/components/shared/link/link';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { Input } from '@client/components/shared/input/input';
import { InputFile } from '@client/components/shared/input-file/input-file';
import { IOption, Select } from '@client/components/shared/select/select';
import { Modal } from '@client/components/shared/modal/modal';

const options: IOption[] = [
  { value: '1', label: 'one' },
  { value: '2', label: 'two' },
  { value: '3', label: 'three' },
];

export const PageComponentsDemo: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <DemoGrid>
      <div>
        <Link href="#123">Link</Link>
      </div>
      <div>
        <Button type="default" onClick={showModal}>
          Button Default
        </Button>
      </div>
      <div>
        <Button onClick={showModal}>Button Primary</Button>
      </div>
      <div>
        <Toggle unCheckedChildren="123" checkedChildren="456" />
      </div>
      <div>
        <Toggle unCheckedChildren="abc" checkedChildren="xyz" defaultChecked />
      </div>
      <div>
        <FormItem label="First name">
          <Input />
        </FormItem>
      </div>
      <div>
        <FormItem label="Avatar upload">
          <InputFile />
        </FormItem>
      </div>
      <div>
        <FormItem label="Select">
          <Select size="large" options={options} />
        </FormItem>
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="OK"
        cancelText="Cancel">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </DemoGrid>
  );
};
