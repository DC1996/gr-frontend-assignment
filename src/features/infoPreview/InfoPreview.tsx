import styles from "./InfoPreview.module.css"

export function InfoPreview(props: any) {
    return (
        <div className={'flexColumn ' + styles.infoPreviewBox}>
            <h5 className={styles.infoLabel}>
                {props.label}
            </h5>
            <p className={styles.information}>
                {props.information}
            </p>
        </div>
    );
}