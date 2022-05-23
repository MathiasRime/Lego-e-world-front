function Rating(props){
    const { rating, numReviews, caption } = props;

    return (
        <div className="rating">
            <span>
                <i className={
                rating>=1 
                    ?'fa fa-star checked' 
                    : rating>=0.5
                    ? 'fa fa-star-half-empty checked'
                    : 'fa fa-star-empty'
            }
            />
            </span>
            <span>
                <i className={
                rating>=2 
                    ?'fa fa-star checked' 
                    : rating>=1.5
                    ? 'fa fa-star-half-empty checked'
                    : 'fa fa-star-empty'
            }
            />
            </span>
            <span>
                <i className={
                rating>=3 
                    ?'fa fa-star checked' 
                    : rating>=2.5
                    ? 'fa fa-star-half-empty checked'
                    : 'fa fa-star-empty'
            }
            />
            </span>
            <span>
                <i className={
                rating>=4 
                    ?'fa fa-star checked' 
                    : rating>=3.5
                    ? 'fa fa-star-half-empty checked'
                    : 'fa fa-star-empty'
            }
            />
            </span>
            <span>
                <i className={
                rating>=5 
                    ?'fa fa-star checked' 
                    : rating>=4.5
                    ? 'fa fa-star-half-empty checked'
                    : 'fa fa-star-empty'
            }
            />
            </span>
            {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{' ' + numReviews + ' reviews'}</span>
      )}
        </div>
    )
}

export default Rating;