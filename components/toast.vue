<template>
    <div>
              <div class="mainToast" :class="{ active: check }">
          <div class="toast-content">
            <i class="fa-solid fa-check toast-check"></i>
            <div class="message">
              <span class="message-text text-1">{{ text1 }}</span>
            </div>
          </div>
          <i class="fa-solid fa-xmark toast-close " @click="closeToast()"></i>
          <div class="progress" :class="{ active: check }"></div>
        </div>
         <!-- <button class="toast-btn" @click="showToast()">Show success toast</button> -->
    </div>
</template>

<script>
export default {
props:['check','text1'],
    setup(props) {

        const isActive = ref(props.check);

        const showToast = () => {
            isActive.value = props.check;

            setTimeout(() => {
                isActive.value = props.check;
            }, 5000);
        };
        // showToast();

        const closeToast = () => {
            isActive.value = false;
        };

    onMounted(() => {
            const mainToast = document.querySelector('.mainToast');
            const btn = document.querySelector('.toast-btn');
            const close = document.querySelector('.toast-close');
            const progress = document.querySelector('.progress');
            if (isActive.value) {
                   mainToast.classList.add('active');
                progress.classList.add('active');

                setTimeout(() => {
                    mainToast.classList.remove('active');
                }, 4000);

                setTimeout(() => {
                    progress.classList.remove('active');
                }, 3000);
            }

            // else if (!isActive.value) {
            //       mainToast.classList.remove('active');

            //     setTimeout(() => {
            //         progress.classList.remove('active');
            //     }, 300);
            // }

    });
        return{showToast , closeToast}
}
}
</script>

<style lang="scss" scoped>


</style>