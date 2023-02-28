import AtlassianDropdown from "components/Common/Dropdown/AtlassianDropdown";
import Dropdown from "components/Common/Dropdown/Dropdown";
import React, {
	useEffect,
	useState,
	createRef,
	FC,
	useCallback,
	useMemo,
	useRef,
} from "react";
import { dummy } from "./data";
import "./position.scss";
import { getTooltipPosition } from "./utilites";

export interface positionDummyProps {
	id: number;
	item: string;
	belongTo: string;
}
interface positionProps {
	children?: React.ReactNode;
	tooltip?: string;
}

const Position: FC<positionProps> = () => {
	//dropdown option location by position
	const [select, setSelect] = useState<any>([]);
	const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

	//third
	const tooltipRef = useMemo(
		() => Array.from({ length: dummy.length }).map(() => createRef()),
		[],
	) as any;

	const container = useRef<HTMLDivElement>(null);

	const handleHover = useCallback(
		(list: positionDummyProps, clientX: number) => {
			const idx = list.id - 1;
			const type = list.item;
			if (!container.current) return;

			const tooltip = tooltipRef[idx].current;
			const { left, top } = getTooltipPosition(
				container.current,
				tooltipRef[idx].current,
				type,
				8,
			);
			tooltip.style.opacity = 1;
			tooltip.style.left = `${left}px`;
			tooltip.style.top = `${top}px`;
		},
		[tooltipRef],
	);

	const handleMouseOver = (list: positionDummyProps) => {
		const idx = list.id - 1;
		tooltipRef[idx].current.style.opacity = 0;
	};

	return (
		<div className="position-container">
			<section className="position-wrapper">
				<div className="position-scroll-box">
					<section className="position-grid-box" ref={container}>
						{dummy.map((list: positionDummyProps) => {
							return (
								<div
									key={list.id}
									className="position-grid-col"
									onMouseLeave={() => {
										handleMouseOver(list);
									}}
									onMouseEnter={({ clientX }) => handleHover(list, clientX)}
								>
									<>{list.item}</>
									<div className="position-box" ref={tooltipRef[list.id - 1]}>
										{list.item}
									</div>
								</div>
							);
						})}
					</section>
				</div>
			</section>
			<section className="position-wrapper">
				<AtlassianDropdown />
				<Dropdown
					select={select}
					options={dummy.map((el) => {
						return { name: el.item };
					})}
					isOpenDropdown={isOpenDropdown}
					setIsOpenDropdown={setIsOpenDropdown}
					handleSelect={() => setIsOpenDropdown(false)}
				/>
			</section>
		</div>
	);
};

export default Position;
