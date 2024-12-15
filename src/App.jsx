import logo from './logo.svg';
import styles from'./App.module.css';
import React, { useState } from 'react';


export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const isValueVaild = value.length >= 3;
	console.log(isValueVaild);

	const onInputButtonClick = () =>{
		const promptValue = prompt('Ваше значение:');
		if(promptValue.length >= 3){
			setValue(promptValue);
			setError('');

		}else {
			setError('Введенное значение должно содержать минимум 3 символа');
			setValue('');
		}
	};

	const onAddButtonClick = () => {
		if(value){
			const newItem = { id: Date.now(), value,};
			const updatedList = [...list, newItem];

			setList(updatedList);
			setValue('');
			setError('');
		}else {
			setError('Пожалуйста, введите значение');
		}
	};



	return (
		<div className={styles['app']}>
			<h1 className={styles['page-heading']}>page-heading</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
			</p>
			<div className={styles['error']}>{ error !== ''? error : ''}</div>
			<div className={styles['buttons-container']}>
				<button className={styles['button']} onClick={onInputButtonClick}>Ввести новое</button>
				<button className={styles['button']} disabled = {!isValueVaild}  onClick={onAddButtonClick}>Добавить в список</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles['list']}>
					{list.map(({id, value, date}) => (<li className={styles['list-item']} key ={id}>{value}</li>))}
				</ul>
    </div>
		</div>
	);
};
