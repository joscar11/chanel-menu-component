//! Imports ------------------------------------------------------------------------------

// Styles
import styles from './Menu.module.scss';

//! Component ---------------------------------------------------------------------------

interface ArrowButtonProps {
    onClick: () => void;
}

const ArrowButton = ({ onClick }: ArrowButtonProps) => {
    //! Render ----------------------------------------------------------------------------
    return (
        <button className={styles.arrowButton} onClick={onClick}>
            ← Retour
        </button>
    );
};

//! Exports -----------------------------------------------------------------------------

export default ArrowButton;
