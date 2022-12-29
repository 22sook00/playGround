import Button from "components/Common/Button/Button";
import React, { useState, useCallback } from "react";
import { copyList, CopyListProps } from "./slimeDummy";
import SlimeList from "./SlimeList";
import SlimePainter from "./SlimePainter";
import "./slimeTest.scss";

const SlimeTest = () => {
	//종류별로 다른 이미지 클릭하면 복사가 됨.
	const [copy, setCopy] = useState<CopyListProps[]>([]);
	const [focus, setFocus] = useState<number | undefined>(undefined);
	const handleClick = useCallback(
		(data: CopyListProps) => {
			setCopy([{ ...data, order: copy.length }, ...copy]);
		},
		[copy],
	);

	const handleChangeText = useCallback(() => {
		const findItem = copy.map((item) => {
			if (item.order === focus) {
				return { ...item, text: "졸림졸림" };
			} else {
				return item;
			}
		});
		setCopy(findItem);
	}, [copy, focus]);

	return (
		<div className="slime-container">
			<section className="slime-left-box ">
				{copyList.map((el, idx) => {
					return (
						<div key={el.id} style={{ marginTop: "8px" }}>
							<SlimeList data={el} handleClick={handleClick} />
						</div>
					);
				})}
			</section>
			<section>
				<SlimePainter copy={copy} setFocus={setFocus} />
			</section>
			<section>
				<Button
					size="large"
					color={copy.length ? "primary" : "light"}
					disabled={!copy.length}
					outline
					onClick={handleChangeText}
				>
					변경버튼
				</Button>
			</section>
		</div>
	);
};

export default SlimeTest;
