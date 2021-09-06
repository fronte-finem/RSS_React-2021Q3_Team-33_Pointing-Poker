import React, { useState } from 'react';
import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import { Toggle } from '@client/components/shared/toggle/toggle';
import { Select } from '@client/components/shared/select/select';
import { InputFile } from '@client/components/shared/inputfile/inpitfile';
import { GameCard } from '@client/components/shared/GameCard/GameCard';
import { AddingGameCard } from '@client/components/shared/GameCard/AddingGameCard';
import { Modal } from '@client/components/shared/modal/modal';
import { Timer } from '@client/components/shared/timer/timer';
import classes from './example.module.css';

export function PageExample() {
  const options = [
    { value: 'Low', label: 'Low' },
    { value: 'Middle', label: 'Middle' },
    { value: 'Hight', label: 'Hight' },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div className={classes.example}>
      <Button>Confirm</Button>
      <Button type="default">Cancel</Button>
      <Input size="large" />
      <Toggle />
      <Select options={options} />
      <InputFile />
      <GameCard score={42} scoreType="SP" />
      <AddingGameCard />
      <Button onClick={showModal}>Confirm</Button>
      <Modal
        title="Title"
        visible={isModalVisible}
        okText="Confirm"
        cancelText="Cancel"
        content="Are you really want to remove playe David Blane from game session?"
      />
      <Timer />
    </div>
  );
}
