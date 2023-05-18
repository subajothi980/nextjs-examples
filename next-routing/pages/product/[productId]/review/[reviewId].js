import { useRouter } from "next/router";

function ReviewById(){
    const router = useRouter();
    const {productId,reviewId} = router.query;
    return `Review ${reviewId} of Product ${productId}`;
}

export default ReviewById;