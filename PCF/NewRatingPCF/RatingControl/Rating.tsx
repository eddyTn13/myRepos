import * as React from "react";
import { Rating, RatingSize } from "office-ui-fabric-react/lib/Rating";
import { getTheme, createTheme, ITheme } from "office-ui-fabric-react/lib/Styling";
export class RatingControl extends React.Component<{}, { rating?: number; largeStarRating?: number; smallStarRating?: number; tenStarRating?: number; themedStarRating?: number; customIconStarRating?: number; }> {
    private _customTheme: ITheme;
    constructor(props: {}) {
        super(props);
        this.state = {
            largeStarRating: undefined
        };
        this._customTheme = createTheme(getTheme());
        this._customTheme.semanticColors.bodySubtext = "#DFDFDF";
        this._customTheme.semanticColors.bodyTextChecked = "#1E9FE8";
    }
    //public render(): JSX.Element {
    //    return ();
    //}
    private _onFocus = () => {
    };
    private _onBlur = () => {
    };
    private _onLargeStarChange = (ev: React.FocusEvent, rating: any): void => {
        this.setState({ largeStarRating: rating });
    };
    private _getRatingComponentAriaLabel(rating: number, maxRating: number): string {
        return `Rating value is ${rating} of ${maxRating}`;
    }
}
export default RatingControl