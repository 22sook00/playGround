import React from "react";

import DropdownMenu, {
	DropdownItem,
	DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

const AtlassianDropdown = () => {
	return (
		<DropdownMenu trigger="Page actions">
			<DropdownItemGroup>
				<DropdownItem description="Previous versions are saved">
					Edit
				</DropdownItem>
				<DropdownItem>Move</DropdownItem>
				<DropdownItem>Clone</DropdownItem>
			</DropdownItemGroup>
		</DropdownMenu>
	);
};

export default AtlassianDropdown;
